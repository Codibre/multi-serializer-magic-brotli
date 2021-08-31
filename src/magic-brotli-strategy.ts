import {
	ChainSerializerStrategy,
	OptionalDeserializer,
	Serialized,
	pipeStream,
	isStream,
	concatStream,
	SerializerMode,
	resolver,
} from 'multi-serializer';
import {
	BrotliOptions,
	createBrotliCompress,
	createBrotliDecompress,
	brotliCompressSync,
	brotliDecompressSync,
} from 'zlib';
import { Stream } from 'stream';
import {
	isMagicBrotli,
	removeMagicHeader,
	serializedMagicBrotli,
	streamMagicBrotli,
} from './is-magic-brotli';

function decompressFactory(
	decompress: (x: Serialized) => Serialized | Stream,
): (
	content: Serialized | Stream,
) => Serialized | Stream | Promise<Serialized | Stream> {
	return (x) =>
		resolver(isStream(x) ? concatStream(x) : x, (y) =>
			isMagicBrotli(y) ? decompress(y) : y,
		);
}

export interface SerializerBrotliOptions extends BrotliOptions {
	mode?: SerializerMode;
}

export class MagicBrotliStrategy
	implements
		ChainSerializerStrategy<Stream | Serialized>,
		OptionalDeserializer {
	constructor(options?: SerializerBrotliOptions) {
		const brotliAsync = (x: Serialized | Stream) =>
			streamMagicBrotli(pipeStream(x, createBrotliCompress(options)));
		this.serialize =
			options?.mode === SerializerMode.SYNC
				? (x) =>
						isStream(x)
							? brotliAsync(x)
							: serializedMagicBrotli(brotliCompressSync(x, options))
				: brotliAsync;

		this.deserialize =
			options?.mode === SerializerMode.SYNC
				? decompressFactory((x: Serialized) =>
						brotliDecompressSync(removeMagicHeader(x), options),
				  )
				: decompressFactory((x: Serialized) =>
						pipeStream(removeMagicHeader(x), createBrotliDecompress(options)),
				  );
	}

	readonly mustDeserialize = isMagicBrotli;

	readonly serialize: (
		content: Serialized | Stream,
	) => Serialized | Stream | Promise<Serialized | Stream>;

	readonly deserialize: (
		content: Serialized | Stream,
	) => Serialized | Stream | Promise<Serialized | Stream>;
}

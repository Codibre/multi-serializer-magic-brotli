import {
	ChainSerializerStrategy,
	OptionalDeserializer,
	Serialized,
	pipeStream,
	isStream,
	concatStream,
} from 'multi-serializer';
import {
	BrotliOptions,
	createBrotliCompress,
	createBrotliDecompress,
} from 'zlib';
import { Stream } from 'stream';
import {
	isMagicBrotli,
	removeMagicHeader,
	streamMagicBrotli,
} from './is-magic-brotli';

export class MagicBrotliStrategy
	implements
		ChainSerializerStrategy<Stream | Serialized>,
		OptionalDeserializer {
	constructor(private options?: BrotliOptions) {}

	mustDeserialize(content: Serialized): boolean {
		return isMagicBrotli(content);
	}

	async serialize(content: Serialized | Stream): Promise<Stream> {
		const brotli = pipeStream(content, createBrotliCompress(this.options));
		return streamMagicBrotli(brotli);
	}

	async deserialize(
		content: Serialized | Stream,
	): Promise<Serialized | Stream> {
		if (isStream(content)) {
			content = await concatStream(content);
		}
		if (!this.mustDeserialize(content)) {
			return content;
		}
		content = removeMagicHeader(content);
		return pipeStream(content, createBrotliDecompress(this.options));
	}
}

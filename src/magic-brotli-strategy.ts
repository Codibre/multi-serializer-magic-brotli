import {
	ChainSerializerStrategy,
	Serialized,
	pipeStream,
} from 'multi-serializer';
import {
	BrotliOptions,
	createBrotliCompress,
	createBrotliDecompress,
} from 'zlib';
import { Stream } from 'stream';
import { isMagicBrotli, streamMagicBrotli } from './is-magic-brotli';

export class MagicBrotliStrategy
	implements ChainSerializerStrategy<Stream | Serialized> {
	constructor(private options?: BrotliOptions) {}

	async serialize(content: Serialized | Stream): Promise<Stream> {
		const brotli = pipeStream(content, createBrotliCompress(this.options));
		return streamMagicBrotli(brotli);
	}

	async deserialize(
		content: Serialized | Stream,
	): Promise<Serialized | Stream> {
		const { isBrotli, wholeContent } = await isMagicBrotli(content);
		return isBrotli
			? pipeStream(wholeContent, createBrotliDecompress(this.options))
			: wholeContent;
	}
}

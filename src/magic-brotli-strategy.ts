import {
	ChainSerializerStrategy,
	Serialized,
	concatStream,
} from 'multi-serializer';
import { BrotliOptions, brotliCompress, brotliDecompress } from 'zlib';
import { Stream } from 'stream';
import { isMagicBrotli, streamMagicBrotli } from './is-magic-brotli';
import { promisify } from 'util';
const compress = promisify(brotliCompress);
const decompress = promisify(brotliDecompress);

export class MagicBrotliStrategy
	implements ChainSerializerStrategy<Stream | Serialized> {
	constructor(private options?: BrotliOptions) {}

	async serialize(content: Serialized | Stream): Promise<Buffer> {
		const brotli = await compress(await concatStream(content), this.options);
		return streamMagicBrotli(brotli);
	}

	async deserialize(content: Serialized | Stream): Promise<Serialized> {
		const { isBrotli, wholeContent } = await isMagicBrotli(content);
		return isBrotli ? decompress(wholeContent, this.options) : wholeContent;
	}
}

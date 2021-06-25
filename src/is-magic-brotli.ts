import { Serialized, isStream, concatStream } from 'multi-serializer';
import { Stream } from 'stream';

const HEADER_LIMIT = 4;
const HEADERS = [0xce, 0xb2, 0xcf, 0x81];
const bufferHeaders = Buffer.from(HEADERS);

export async function isMagicBrotli(content: Serialized | Stream) {
	if (isStream(content)) {
		content = await concatStream(content);
	}
	const buff = Buffer.from(content.slice(0, HEADER_LIMIT) as ArrayBuffer);
	const isBrotli = HEADERS.every((x, idx) => buff[idx] === x);
	const wholeContent = isBrotli
		? (content.slice(HEADER_LIMIT) as Buffer)
		: buff;
	return {
		isBrotli,
		wholeContent,
	};
}

export function streamMagicBrotli(brotli: Buffer) {
	return Buffer.concat([bufferHeaders, brotli]);
}

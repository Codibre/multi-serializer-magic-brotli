import { Serialized } from 'multi-serializer';
import { Stream, PassThrough } from 'stream';

const HEADER_LIMIT = 4;
const HEADERS = [0xce, 0xb2, 0xcf, 0x81];
const bufferHeaders = Buffer.from(HEADERS);

export function removeMagicHeader(content: Serialized) {
	return content.slice(HEADER_LIMIT);
}

export function isMagicBrotli(content: Serialized) {
	const buff = Buffer.from(content.slice(0, HEADER_LIMIT) as ArrayBuffer);
	const isBrotli = HEADERS.every((x, idx) => buff[idx] === x);
	return isBrotli;
}

export function streamMagicBrotli(brotli: Stream) {
	const pass = new PassThrough();
	pass.write(bufferHeaders);
	brotli.pipe(pass);
	brotli.on('end', () => pass.emit('end'));
	return pass;
}

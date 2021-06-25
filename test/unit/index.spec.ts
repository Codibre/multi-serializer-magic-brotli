import { concatStream } from 'multi-serializer';
import { MagicBrotliStrategy } from '../../src/magic-brotli-strategy';

describe('index.ts', () => {
	it('should compress and decompress', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy();

		const write = await serializer.serialize(req);
		const read = await concatStream(await serializer.deserialize(write));

		expect(read.toString()).toEqual(req);
	});
});

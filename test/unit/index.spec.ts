import { concatStream, SerializerMode, Serialized } from 'multi-serializer';
import { MagicBrotliStrategy } from '../../src';

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

	it('should not decompress i its not magic brotli', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy();

		const read = await concatStream(await serializer.deserialize(req));

		expect(read.toString()).toEqual(req);
	});
	it('should compress and decompress with sync mode', () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy({ mode: SerializerMode.SYNC });

		const write = serializer.serialize(req) as Serialized;
		const read = serializer.deserialize(write);

		expect(read.toString()).toEqual(req);
	});

	it('should compress and decompress with async mode in compressing and sync mode in decompressing', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy();
		const deserializer = new MagicBrotliStrategy({ mode: SerializerMode.SYNC });

		const write = await deserializer.serialize(req);
		const read = await concatStream(await serializer.deserialize(write));

		expect(read.toString()).toEqual(req);
	});

	it('should compress and decompress with sync mode in compressing and async mode in decompressing', async () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy({ mode: SerializerMode.SYNC });
		const deserializer = new MagicBrotliStrategy();

		const write = deserializer.serialize(req) as Serialized;
		const read = await serializer.deserialize(write);

		expect(read.toString()).toEqual(req);
	});

	it('should not decompress if its not magic brotli with sync mode', () => {
		const req = JSON.stringify({
			bar: 'abc',
		});
		const serializer = new MagicBrotliStrategy({ mode: SerializerMode.SYNC });

		const read = serializer.deserialize(req);

		expect(read.toString()).toEqual(req);
	});
});

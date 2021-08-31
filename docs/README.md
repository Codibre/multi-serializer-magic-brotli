fluent-iterable - v0.1.0

# fluent-iterable - v0.1.0

## Table of contents

### Classes

- [MagicBrotliStrategy](classes/magicbrotlistrategy.md)

### Interfaces

- [SerializerBrotliOptions](interfaces/serializerbrotlioptions.md)

### Functions

- [isMagicBrotli](README.md#ismagicbrotli)
- [removeMagicHeader](README.md#removemagicheader)
- [serializedMagicBrotli](README.md#serializedmagicbrotli)
- [streamMagicBrotli](README.md#streammagicbrotli)

## Functions

### isMagicBrotli

▸ **isMagicBrotli**(`content`: Serialized): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized |

**Returns:** *boolean*

___

### removeMagicHeader

▸ **removeMagicHeader**(`content`: Serialized): *string* \| ArrayBuffer

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized |

**Returns:** *string* \| ArrayBuffer

___

### serializedMagicBrotli

▸ **serializedMagicBrotli**(`brotli`: Serialized): *Buffer*

#### Parameters:

Name | Type |
:------ | :------ |
`brotli` | Serialized |

**Returns:** *Buffer*

___

### streamMagicBrotli

▸ **streamMagicBrotli**(`brotli`: Stream): *PassThrough*

#### Parameters:

Name | Type |
:------ | :------ |
`brotli` | Stream |

**Returns:** *PassThrough*

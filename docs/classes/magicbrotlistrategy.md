[fluent-iterable - v0.0.4](../README.md) / MagicBrotliStrategy

# Class: MagicBrotliStrategy

## Implements

* *ChainSerializerStrategy*<Stream \| Serialized\>
* *OptionalDeserializer*

## Table of contents

### Constructors

- [constructor](magicbrotlistrategy.md#constructor)

### Methods

- [deserialize](magicbrotlistrategy.md#deserialize)
- [mustDeserialize](magicbrotlistrategy.md#mustdeserialize)
- [serialize](magicbrotlistrategy.md#serialize)

## Constructors

### constructor

\+ **new MagicBrotliStrategy**(`options?`: BrotliOptions): [*MagicBrotliStrategy*](magicbrotlistrategy.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | BrotliOptions |

**Returns:** [*MagicBrotliStrategy*](magicbrotlistrategy.md)

## Methods

### deserialize

▸ **deserialize**(`content`: Serialized \| *Stream*): *Promise*<Serialized \| Stream\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized \| *Stream* |

**Returns:** *Promise*<Serialized \| Stream\>

Implementation of: void

___

### mustDeserialize

▸ **mustDeserialize**(`content`: Serialized): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized |

**Returns:** *boolean*

Implementation of: void

___

### serialize

▸ **serialize**(`content`: Serialized \| *Stream*): *Promise*<Stream\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized \| *Stream* |

**Returns:** *Promise*<Stream\>

Implementation of: void

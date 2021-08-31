[fluent-iterable - v0.1.0](../README.md) / MagicBrotliStrategy

# Class: MagicBrotliStrategy

## Implements

* *ChainSerializerStrategy*<Stream \| Serialized\>
* *OptionalDeserializer*

## Table of contents

### Constructors

- [constructor](magicbrotlistrategy.md#constructor)

### Properties

- [deserialize](magicbrotlistrategy.md#deserialize)
- [mustDeserialize](magicbrotlistrategy.md#mustdeserialize)
- [serialize](magicbrotlistrategy.md#serialize)

## Constructors

### constructor

\+ **new MagicBrotliStrategy**(`options?`: [*SerializerBrotliOptions*](../interfaces/serializerbrotlioptions.md)): [*MagicBrotliStrategy*](magicbrotlistrategy.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*SerializerBrotliOptions*](../interfaces/serializerbrotlioptions.md) |

**Returns:** [*MagicBrotliStrategy*](magicbrotlistrategy.md)

## Properties

### deserialize

• `Readonly` **deserialize**: (`content`: Serialized \| *Stream*) => Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

#### Type declaration:

▸ (`content`: Serialized \| *Stream*): Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized \| *Stream* |

**Returns:** Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

Implementation of: void

___

### mustDeserialize

• `Readonly` **mustDeserialize**: (`content`: Serialized) => *boolean*

#### Type declaration:

▸ (`content`: Serialized): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized |

**Returns:** *boolean*

Implementation of: void

___

### serialize

• `Readonly` **serialize**: (`content`: Serialized \| *Stream*) => Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

#### Type declaration:

▸ (`content`: Serialized \| *Stream*): Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

#### Parameters:

Name | Type |
:------ | :------ |
`content` | Serialized \| *Stream* |

**Returns:** Serialized \| *Stream* \| *Promise*<Serialized \| Stream\>

Implementation of: void

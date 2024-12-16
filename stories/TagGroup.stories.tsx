'use client'

import {useListData} from 'react-stately'
import {
  type IntentProps,
  type ShapeProps,
  Tag,
  TagGroup
} from '../src/components/TagGroup.tsx'

const intents: IntentProps[] = ['primary', 'secondary']
const shapes: ShapeProps[] = ['square', 'circle']

const items = [
  {id: 1, name: 'Chocolate'},
  {id: 2, name: 'Mint'},
  {id: 3, name: 'Strawberry'},
  {id: 4, name: 'Vanilla'}
]

export const Intents = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}
  >
    {intents.map(intent => (
      <TagGroup items={items} label={intent} intent={intent} key={intent}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>
    ))}
  </div>
)

export const Selection = () => {
  const list = useListData({
    initialItems: [
      {id: 1, name: 'Chocolate'},
      {id: 2, name: 'Mint'},
      {id: 3, name: 'Strawberry'},
      {id: 4, name: 'Vanilla'}
    ]
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <TagGroup items={list.items} label="Ice cream flavor">
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>
      <TagGroup
        items={list.items}
        label="Ice cream flavor"
        description="Multiple selectionMode"
        selectionMode="multiple"
        onRemove={keys => list.remove(...keys)}
      >
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>
    </div>
  )
}

export const Shape = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}
  >
    {shapes.map(shape => (
      <TagGroup items={items} label={shape} shape={shape} key={shape}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>
    ))}
  </div>
)

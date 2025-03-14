import {useListData} from 'react-stately'
import {
  MultipleSelect,
  MultipleSelectItem
} from '../src/components/MultipleSelect.tsx'
import {Tag} from '../src/components/TagGroup.tsx'

export function Example() {
  const selectedItems = useListData({
    initialItems: [fruits[0], fruits[1]]
  })
  return (
    <MultipleSelect
      label="Fruits"
      selectedItems={selectedItems}
      items={fruits}
      tag={item => <Tag>{item.name}</Tag>}
    >
      {item => {
        return (
          <MultipleSelectItem textValue={item.name}>
            {item.name}
          </MultipleSelectItem>
        )
      }}
    </MultipleSelect>
  )
}

const fruits = [
  {id: 1, name: 'Apple'},
  {id: 2, name: 'Banana'},
  {id: 3, name: 'Cherry'},
  {id: 4, name: 'Date'},
  {id: 5, name: 'Elderberry'},
  {id: 6, name: 'Fig'},
  {id: 7, name: 'Grape'},
  {id: 8, name: 'Honeydew'},
  {id: 9, name: 'Kiwi'},
  {id: 10, name: 'Lemon'},
  {id: 11, name: 'Mango'},
  {id: 12, name: 'Nectarine'},
  {id: 13, name: 'Orange'},
  {id: 14, name: 'Papaya'},
  {id: 15, name: 'Quince'},
  {id: 16, name: 'Raspberry'},
  {id: 17, name: 'Strawberry'},
  {id: 18, name: 'Tangerine'},
  {id: 19, name: 'Ugli Fruit'},
  {id: 20, name: 'Watermelon'}
]

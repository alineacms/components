import {useState} from 'react'
import {Button} from '../components/Button.tsx'
import {TextField} from '../components/TextField.tsx'
import {IcRoundAddCircle} from '../stories/icons/IcRoundAddCircle.tsx'
import {ListField} from './ListField.tsx'

export const Example = () => {
  const [items, setItems] = useState<
    Array<{id: string; label: string; type: string}>
  >([
    {id: '1', label: 'Lorem ipsum', type: 'page'},
    {id: '2', label: 'Dolor sit amet', type: 'page'},
    {id: '3', label: 'Onsectetur adipiscing elit', type: 'page'}
  ])

  const handleReorder = (from: number, to: number) => {
    const newItems = [...items]
    const [moved] = newItems.splice(from, 1)
    newItems.splice(to, 0, moved)
    setItems(newItems)
  }

  const handleRemove = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div style={{padding: 20, maxWidth: 600}}>
      <div style={{marginBottom: 10, fontWeight: 'bold'}}>Link(s)</div>
      <ListField
        items={items}
        onReorder={handleReorder}
        onRemove={handleRemove}
        getItemKey={item => item.id}
        getItemTitle={item =>
          `#${item.label.toLowerCase().replace(/ /g, '-').replace(/\?/g, '')}`
        }
      >
        {(item, index) => (
          <TextField
            label="Link label"
            value={item.label}
            onChange={(val: string) => {
              const newItems = [...items]
              newItems[index].label = val
              setItems(newItems)
            }}
          />
        )}
      </ListField>
      <div className="alinea-ListField-footer">
        <Button
          appearance="plain"
          onPress={() =>
            setItems([
              ...items,
              {id: Date.now().toString(), label: '', type: 'page'}
            ])
          }
        >
          <IcRoundAddCircle /> Page link
        </Button>
        <Button
          appearance="plain"
          onPress={() =>
            setItems([
              ...items,
              {id: Date.now().toString(), label: '', type: 'external'}
            ])
          }
        >
          <IcRoundAddCircle /> External website
        </Button>
        <Button
          appearance="plain"
          onPress={() =>
            setItems([
              ...items,
              {id: Date.now().toString(), label: '', type: 'file'}
            ])
          }
        >
          <IcRoundAddCircle /> File
        </Button>
      </div>
    </div>
  )
}

export default {
  title: 'Todo / Link'
}

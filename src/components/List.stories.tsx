import {Button} from './Button.tsx'
import {List, ListItem} from './List.tsx'
import {Stack} from '../stories/Stack.tsx'
import {IcRoundSettings} from '../stories/icons/IcRoundSettings.tsx'
import {IcRoundHistory} from '../stories/icons/IcRoundHistory.tsx'

export function Basic() {
  return (
    <List>
      <ListItem title="Welcome">
        This is a simple list item with a short description.
      </ListItem>
      <ListItem title="Recent activity">
        Drafts updated by your team show up here.
      </ListItem>
      <ListItem title="Notes">
        <div>
          You can put more complex content in the body, including links and
          controls.
        </div>
      </ListItem>
    </List>
  )
}

export function WithOptions() {
  return (
    <Stack gap={12}>
      <List>
        <ListItem
          title="Preferences"
          options={
            <Button appearance="plain">
              <IcRoundSettings data-slot="icon" />
            </Button>
          }
        >
          Configure default behavior for your workspace.
        </ListItem>
        <ListItem
          title="Activity log"
          options={
            <Button appearance="plain">
              <IcRoundHistory data-slot="icon" />
            </Button>
          }
        >
          Track changes across content and releases.
        </ListItem>
      </List>
    </Stack>
  )
}

export default {title: 'Components / List'}

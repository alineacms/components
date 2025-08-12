import {
  Button,
  CalendarCell,
  CalendarGrid,
  Calendar as CalendarPrimitive,
  type CalendarProps as CalendarPrimitiveProps,
  type DateValue,
  Heading,
  RangeCalendar,
  type RangeCalendarProps
} from 'react-aria-components'
import {IcRoundKeyboardArrowLeft} from '../stories/icons/IcRoundKeyboardArrowLeft.tsx'
import {IcRoundKeyboardArrowRight} from '../stories/icons/IcRoundKeyboardArrowRight.tsx'
import {Icon} from './Icon.tsx'
import './Calendar.css'

export function Calendar<T extends DateValue>(
  props: CalendarPrimitiveProps<T>
) {
  return (
    <CalendarPrimitive {...props} className="alinea-rac-Calendar">
      <header className="alinea-rac-Calendar-header">
        <Button slot="previous" className="alinea-rac-Calendar-button">
          <Icon icon={IcRoundKeyboardArrowLeft} />
        </Button>
        <Heading className="alinea-rac-Calendar-heading" />
        <Button slot="next" className="alinea-rac-Calendar-button">
          <Icon icon={IcRoundKeyboardArrowRight} />
        </Button>
      </header>
      <CalendarGrid className="alinea-rac-Calendar-grid">
        {date => (
          <CalendarCell date={date} className="alinea-rac-Calendar-cell" />
        )}
      </CalendarGrid>
    </CalendarPrimitive>
  )
}

export function RangeCalendarComponent<T extends DateValue>(
  props: RangeCalendarProps<T>
) {
  return (
    <RangeCalendar {...props} className="alinea-rac-Calendar">
      <header className="alinea-rac-Calendar-header">
        <Button slot="previous" className="alinea-rac-Calendar-button">
          <Icon icon={IcRoundKeyboardArrowLeft} />
        </Button>
        <Heading className="alinea-rac-Calendar-heading" />
        <Button slot="next" className="alinea-rac-Calendar-button">
          <Icon icon={IcRoundKeyboardArrowRight} />
        </Button>
      </header>
      <CalendarGrid className="alinea-rac-Calendar-grid">
        {date => (
          <CalendarCell date={date} className="alinea-rac-Calendar-cell" />
        )}
      </CalendarGrid>
    </RangeCalendar>
  )
}

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Icon } from '../icon'
import Input from '../input'
import { MonthView } from './components/monthView'
import { DatesView } from './components/datesView'
import {
  Calendar,
  Item,
} from './style'

export const DatePicker = ({ value }: Moment) => {
  const [dateObject, setDateObject] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(value || moment())
  const [showMonths, toggleShowMonths] = useState(false)
  const [showDatePicker, toggleshowDatePicker] = useState(false)
  const [input, setInput] = useState(selectedDate.format('L'))

  const handlePrevious = () => setDateObject(dateObject.clone().subtract(1, 'month'))
  const handleNext = () => setDateObject(dateObject.clone().add(1, 'month'))
  const toggleView = () => toggleShowMonths(!showMonths)
  const toggleDatePicker = () => toggleshowDatePicker(!showDatePicker)

  const handleInputChange = newInput => {
      setInput(newInput)
      if (moment(newInput).isValid()) {
          setSelectedDate(moment(newInput))
          setDateObject(moment(newInput))
          toggleshowDatePicker(true)
      }
  }

  const handleDateSelection = (newDate: Moment) => {
      setSelectedDate(newDate)
      setInput(newDate.format('L'))
      toggleshowDatePicker(false)
  }

  useEffect(() => {
      toggleShowMonths(false)
  }, [dateObject])

  return (
    <>
      <Input
          value={ input }
          onClick={ toggleDatePicker }
          onChange={ handleInputChange }
      />
      { showDatePicker &&
        <Calendar>
          <table>
            <thead>
              <tr>
                <Item onClick={ handlePrevious }><Icon icon="chevronLeft" /></Item>
                <Item onClick={ toggleView } colSpan={ showMonths ? 2 : 5 }>
                  { moment(dateObject).format('MMMM YYYY') }
                </Item>
                <Item onClick={ handleNext }><Icon icon="chevronRight" /></Item>
              </tr>
            </thead>
            { !showMonths &&
              <DatesView
                dateObject={ dateObject }
                selectedDate={ selectedDate }
                setSelectedDate={ handleDateSelection }
              />
            }
            { showMonths &&
              <MonthView dateObject={ dateObject } setDateObject={ setDateObject } />
            }
          </table>
        </Calendar>
      }
    </>
  )
}

export default null

import React from 'react'
import {
  CalendarHead,
} from '../style'
import moment from 'moment'
import generateDateElements from '../helpers/generateDateElements'

export const DatesView = ({
  dateObject,
  selectedDate,
  setSelectedDate,
}) => {
  const weekdays = moment.weekdaysShort()

  const generateRows = (dateElements: JSX.Element[]) => {
    const numberOfRows = ((dateElements.length - 1) / 7)
    const rows = []
    // map dates into rows of 7
    for (let i = 0; i < numberOfRows; i++) {
      const row = (
        <tr>
          { dateElements.slice((i * 7), ((i * 7) + 7)).map(month => month) }
        </tr>
      )
      rows.push(row)
    }
    return rows
  }

  const datesTable = generateRows(generateDateElements(dateObject, selectedDate, setSelectedDate))

  return (
    <>
      <thead>
        <tr>
          { weekdays.map(weekday => (
            <CalendarHead key={ weekday }>
              { weekday }
            </CalendarHead>))
          }
        </tr>
      </thead>
      <tbody>
        { datesTable && datesTable }
      </tbody>
    </>
  )
}

export default null

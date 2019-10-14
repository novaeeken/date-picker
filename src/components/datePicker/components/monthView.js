import moment from 'moment'
import { ItemMonth } from '../style'
import React from 'react'

export const MonthView = ({
  dateObject,
  setDateObject,
}) => {
  const months = moment.monthsShort()

  const generateTable = (cells, dateObj, dateSetter) => {
    const rows = []
    // map months into rows of 4
    for (let i = 0; i < 3; i++) {
      const row = (
        <tr>
          { cells.slice((i * 4), ((i * 4) + 4))
            .map(month => (
              <ItemMonth key={ month } onClick={ () => dateSetter(dateObj.clone().month(month)) }>
                { month }
              </ItemMonth>
            ))
          }
        </tr>
      )
      rows.push(row)
    }
    return rows
  }

  return (
    <tbody>
      { generateTable(months, dateObject, setDateObject) }
    </tbody>
  )
}

export default null

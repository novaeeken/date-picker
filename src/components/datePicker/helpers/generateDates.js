import moment, { Moment } from 'moment'
import getCalendarLength from './getCalendarLength'

export default (dateObj: Moment) => {
  // calculate the number of days of previous month in first week
  const indexFirstDay = parseInt(moment(dateObj).startOf('month').format('d'), 10)
  const numberOfDays = getCalendarLength(indexFirstDay, dateObj)

  const dates = []
  // add all dates before the 1st of this month
  for (let i = indexFirstDay; i > 0; i--) {
      dates.push(moment(dateObj).startOf('month').subtract(`${i}`, 'days'))
  }
  // add all remaining days
  for (let i = 0; i < (numberOfDays - indexFirstDay); i++) {
      dates.push(moment(dateObj).startOf('month').add(`${i}`, 'days'))
  }
  return dates
}

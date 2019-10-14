import moment, { Moment } from 'moment'

export default (startIndex: number, specificMoment: Moment) => {
  const daysInMonth = parseInt(moment(specificMoment).endOf('month').format('D'), 10)

  // check if there are already enough days to fill up 5 rows of 7 dates, otherwise, add another week
  const subTotal = startIndex + daysInMonth
  if (subTotal === 35) {
      return subTotal
  }
  return (subTotal + (7 - (subTotal % 7)))
}

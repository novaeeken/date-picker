import React from 'react'
import moment, { Moment } from 'moment'
import generateDates from './generateDates'
import {
    Item,
    ItemToday,
    ItemOutside,
    ItemSelected,
} from '../style'

export default (
    dateObj: Moment,
    selectedDate: Moment,
    dateSetter: (date: Moment) => void,
) => (
    generateDates(dateObj).map(date => {
        // set onChange and key-values
        const changeDate = () => dateSetter(date)
        const key = date.format('MM-DD-YYYY')

        // selected date
        if (date.isSame(selectedDate, 'day')) {
            return (<ItemSelected key={ key } onClick={ changeDate } >{ date.date() }</ItemSelected>)
        }
        // current date
        if (date.isSame(moment(), 'day')) {
            return (<ItemToday key={ key } onClick={ changeDate } >{ date.date() }</ItemToday>)
        }
        // dates outside current months
        if (!date.isSame(dateObj, 'month')) {
            return (<ItemOutside key={ key } onClick={ changeDate } >{ date.date() }</ItemOutside>)
        }

        // general date
        return (<Item key={ key } onClick={ changeDate } >{ date.date() }</Item>)
    },
))

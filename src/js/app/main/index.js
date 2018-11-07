/**
 * @author rubyisapm
 */
import Vue from 'vue';
import {DateInput, DatesInput} from '../../../component/index';

new Vue({
    el: '#app',
    components: {
        date: DateInput,
        dates: DatesInput
    },
    data: {
        date1: +new Date(),
        date2: 0,
        dateOps: {
            dateFormat: 'yyyy-MM-dd'
        },
        dates1: {
            begin: '',
            end: ''
        },
        dates2: {
            begin: 0,
            end: 0
        },
        beginTime: 0,
        endTime: 0,
        disabled: false,
        beginDisabled: false,
        endDisabled: false
    }
});

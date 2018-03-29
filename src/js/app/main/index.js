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
        date: +new Date(),
        dateOps: {
            dateFormat: 'yyyy-MM-dd'
        },
        beginDate: +new Date(),
        endDate: +new Date(),
        beginTime: 0,
        endTime: 0,
        disabled: false,
        beginDisabled: false,
        endDisabled: false
    },
    methods: {
        changeDate(date){
            console.log(date);
        },
        changeDates(){
            var dates = this.$refs.dates.getDates(false);

            this.beginTime = dates.begin;
            this.endTime = dates.end;
        },
        getDate(){
            console.log(this.$refs.date1.getDate(true));
            console.log(this.$refs.date1.getDate(false));
        },
        getDates(){
            console.log(this.$refs.dates.getDates(true));
            console.log(this.$refs.dates.getDates(false, true));
            console.log(this.$refs.dates.getDates(false));
        },
        getDates2(){
            console.log(this.$refs.dates2.getDates(true, true));
            console.log(this.$refs.dates2.getDates(false, true));
        },
        setDates(){
            this.beginDate = 1484841600000;
            this.endDate = 1484841600000;
        },
        changeDisabled(){
            this.disabled = !this.disabled;
        },
        changeBeginDisabled(){
            this.beginDisabled = !this.beginDisabled;
        },
        changeEndDisabled(){
            this.endDisabled = !this.endDisabled;
        }
    }
});

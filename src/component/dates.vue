<template>
    <div class="input-group date-input-group">
        <date ref="beginDate"
              v-model="beginDate"
              :placeholder="beginPlaceholder"
              :ops="beginOps"
              :disabled="beginDisabled"
              @change="changeBeginDate"></date>
        <span class="input-group-addon">至</span>
        <date ref="endDate"
              v-model="endDate"
              :placeholder="endPlaceholder"
              :ops="endOps"
              :disabled="endDisabled"
              class="end-wrap"
              @change="changeEndDate"></date>
    </div>
</template>
<script type="es6">
    import DateInput from './date';
    const timeLargerThan = (time1, time2)=>{
        const time1Number = (time1 + '').replace(/^.*(\d{2}):(\d{2}):(\d{2}).*$/, '$1$2$3') * 1;
        const time2Number = (time2 + '').replace(/^.*(\d{2}):(\d{2}):(\d{2}).*$/, '$1$2$3') * 1;

        return time1Number > time2Number;
    };

    export default{
        name: 'dates',
        components: {
            date: DateInput
        },
        model: {
            prop: 'initialDates',
            event: 'change'
        },
        props: {
            beginDisabled: {
                type: Boolean,
                default: false
            },
            endDisabled: {
                type: Boolean,
                default: false
            },
            beginPlaceholder: {
                type: String,
                default: '开始时间'
            },
            endPlaceholder: {
                type: String,
                default: '结束时间'
            },
            initialDates: {
                type: Object,
                default(){
                    return {
                        begin: '',
                        end: ''
                    };
                }
            },
            beginOps: {
                type: Object,
                default(){
                    return {}
                }
            },
            endOps: {
                type: Object,
                default(){
                    return {}
                }
            },
            related: {
                type: Boolean,
                default: true
            },
            valueReadable: {
                type: Boolean,
                default: false
            },
            valueEndTransfered: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                beginDate: '',
                endDate: ''
            }
        },
        created(){
            this.initDates();
        },
        methods: {
            initDates(){
                this.beginDate = this.initialDates.begin === 0 ? '' : this.initialDates.begin;
                this.endDate = this.initialDates.end === 0 ? '' : this.initialDates.end;
            },
            getDates(readable = this.valueReadable, endTransfered = this.valueEndTransfered){
                var begin = this.$refs.beginDate.getDate(readable),
                        end = this.$refs.endDate.getDate(readable);

                if (!readable && endTransfered && (this.beginOps.type === 'date' || typeof this.beginOps.type === 'undefined') && (this.endOps.type === 'date' || typeof this.endOps.type === 'undefined') && end !== 0) {
                    end += 86400000 - 1;
                }

                if(!readable && endTransfered && this.beginOps.type === 'datetime' && end !== 0){
                    end += 999;
                }
                return {
                    begin: begin,
                    end: end
                }
            },
            changeBeginDate(date){
                this.beginDate = date;
                var beginDate=this.$refs.beginDate.getDate(true);
                var endDate=this.$refs.endDate.getDate(true);

                if (beginDate !== '' && this.related && !this.endDisabled) {
                    this.interveneDate(beginDate, endDate, true);
                }
                this.$nextTick(function() {
                    this.$emit('change', this.getDates());
                })
            },
            changeEndDate(date){
                this.endDate = date;
                var endDate = this.$refs.endDate.getDate(true);
                var beginDate=this.$refs.beginDate.getDate(true);

                if (endDate !== '' && this.related && !this.beginDisabled) {
                    this.interveneDate(beginDate, endDate, false);
                }
                this.$nextTick(function() {
                    this.$emit('change', this.getDates());
                })
            },
            interveneDate(beginDate, endDate, beginRefer){
                var beginTime;
                if (beginDate === '') {
                    beginTime = 0;
                } else {
                    beginTime = +new Date(beginDate.replace(/[^\d\:\s]/g,'\/'));
                }
                var endTime;
                if (endDate === '') {
                    endTime = 0;
                } else {
                    endTime = +new Date(endDate.replace(/[^\d\:\s]/g,'\/'));
                }
                // var isSameDay = endTime != 0 && beginTime != 0 && endDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/,'$1$2$3') === beginDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/,'$1$2$3');
                const beginIsDateTime = this.beginOps.type === 'datetime';
                const endIsDateTime = this.endOps.type === 'datetime';
                const endDateInVilid = beginRefer && endDate !== '' && beginTime > endTime;
                const endDateIsEmpty = beginRefer && endDate === '';
                const beginDateInVilid = !beginRefer && beginDate !== '' && beginTime > endTime;
                const beginDateIsEmpty = !beginRefer && beginDate === '';

                if (endDateInVilid || endDateIsEmpty) {
                    const hasTimeStart = beginIsDateTime && endIsDateTime && typeof this.endOps.timeStart !== 'undefined';
                    const canUseTimeStart = hasTimeStart && timeLargerThan(this.endOps.timeStart, beginDate);

                    if (canUseTimeStart) {
                        // 置为当天的endOps.timeStart
                        this.endDate = beginDate.replace(/\d{2}:\d{2}:\d{2}/, this.endOps.timeStart);
                    } else {
                        this.endDate = beginDate;
                    }
                } else if (beginDateInVilid || beginDateIsEmpty) {
                    const hasTimeStart = beginIsDateTime && endIsDateTime && typeof this.beginOps.timeStart !== 'undefined';
                    const canUseTimeStart = hasTimeStart && timeLargerThan(endDate, this.beginOps.timeStart);

                    if (canUseTimeStart) {
                        // 置为当天的beginOps.timeStart
                        this.beginDate = endDate.replace(/\d{2}:\d{2}:\d{2}/, this.beginOps.timeStart);
                    } else {
                        this.beginDate = endDate;
                    }
                }
            }
        },
        watch: {
            'initialDates.begin'(newVal){
                this.beginDate = newVal === 0 ? '' : newVal;
            },
            'initialDates.end'(newVal){
                this.endDate = newVal === 0 ? '' : newVal;
            }
        }
    }
</script>
<style scoped>
.date-input-group .input-group-addon {
    border-left: 0;
    border-right: 0;
}
</style>


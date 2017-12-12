<template>
    <div class="input-group">
        <date ref="beginDate"
              :initial-date="beginDate"
              :placeholder="beginPlaceholder"
              :ops="beginOps"
              @change="changeBeginDate"></date>
        <span class="input-group-addon">至</span>
        <date ref="endDate"
              :initial-date="endDate"
              :placeholder="endPlaceholder"
              :ops="endOps"
              style="border-radius: 0 4px 4px 0;"
              @change="changeEndDate"></date>
    </div>
</template>
<script type="es6">
    import DateInput from './date';
    export default{
        name: 'dates',
        components: {
            date: DateInput
        },
        props: {
            beginPlaceholder: {
                type: String,
                default: '开始时间'
            },
            endPlaceholder: {
                type: String,
                default: '结束时间'
            },
            initialBeginDate: {
                type: [Number, String],
                default: ''
            },
            initialEndDate: {
                type: [Number, String],
                default: ''
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
                this.beginDate = this.initialBeginDate === 0 ? '' : this.initialBeginDate;
                this.endDate = this.initialEndDate === 0 ? '' : this.initialEndDate;
            },
            getDates(readable, endTransfered){
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
                var endDate=this.$refs.endDate.getDate(true);

                if (date !== '' && this.related) {
                    this.interveneDate(date, endDate, true);
                }
                this.$nextTick(function() {
                    this.$emit('change', this.getDates(true));
                })
            },
            changeEndDate(date){
                this.endDate = date;
                var beginDate=this.$refs.beginDate.getDate(true);

                if (date !== '' && this.related) {
                    this.interveneDate(beginDate, date, false);
                }
                this.$nextTick(function() {
                    this.$emit('change', this.getDates(true));
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
                var isSameDay = endTime != 0 && beginTime != 0 && endDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/,'$1$2$3') === beginDate.replace(/^(\d{4})\D(\d{2})\D(\d{2}).*$/,'$1$2$3');
                if (beginRefer && (endDate === '' || beginTime > endTime)) {
                    if (this.beginOps.type === 'datetime' && this.endOps.type === 'datetime' && (endDate === '' || !isSameDay)) {
                        // 置为当天的endOps.timeStart
                        this.endDate = beginDate.replace(/\d{2}:\d{2}:\d{2}/, this.endOps.timeStart || ' 00:00:00');
                    } else {
                        this.endDate = beginDate;
                    }
                }
                if (!beginRefer && (beginDate === '' || beginTime > endTime)) {
                    if (this.beginOps.type === 'datetime' && this.endOps.type === 'datetime' && (beginDate === '' || !isSameDay)) {
                        // 置为当天的beginOps.timeStart
                        this.beginDate = endDate.replace(/\d{2}:\d{2}:\d{2}/, this.beginOps.timeStart || ' 00:00:00');
                    } else {
                        this.beginDate = endDate;
                    }
                }
            }
        },
        watch: {
            initialBeginDate(newVal){
                this.beginDate = newVal === 0 ? '' : newVal;
            },
            initialEndDate(newVal){
                this.endDate = newVal === 0 ? '' : newVal;
            }
        }
    }
</script>

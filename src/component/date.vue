<template>
    <div class="date-wrap">
        <input type="text"
               class="form-control has-feedback"
               :disabled="disabled"
               :placeholder="placeholder"
               ref="date">
        <span v-if="!disabled && mixedOps.clearBtn"
              class="glyphicon glyphicon-remove form-control-feedback text-muted"
              @click="empty"></span>
    </div>
</template>
<script type="es6">
    import utility from 'ct-utility';

    export default {
        name: 'date',
        model: {
            prop: 'initialDate',
            event: 'change'
        },
        props: {
            initialDate: {
                type: [String, Number],
                default: ''
            },
            ops: {
                type: Object,
                default() {
                    return {
                        clearBtn: true
                    }
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            valueReadable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                date: ''
            }
        },
        computed: {
            mixedOps() {
                const defaultOps = {
                    type: 'date',
                    dateFormat: 'yyyy-MM-dd',
                    timeFormat: 'HH:mm:ss',
                    timeStart: '00:00:00',
                    timeBtn: true,
                    clearBtn: true,
                    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    shortMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    shortMonthNames2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
                    errorOutOfRange: "选择的日期不符合规则",
                    selectableDays: [0, 1, 2, 3, 4, 5, 6],
                    nonSelectable: [],
                    recNonSelectable: [],
                    startOfWeek: 1,
                    showWeek: false,
                    selectWeek: false,
                    weekLabel: "周",
                    dateMin: "",
                    dateMax: ""
                };

                return Object.assign(defaultOps, this.ops);
            }
        },
        methods: {
            getDate(readable = this.valueReadable) {
                if (readable) {
                    return this.date;
                } else {
                    return this.date === '' ? 0 : +new Date(this.date.replace(/[^\d\:\s]/g, '\/'));
                }
            },
            initDate() {
                if (this.initialDate === parseInt(this.initialDate) && this.initialDate !== 0) {
                    if (this.mixedOps.type === 'date') {
                        this.date = utility.dateFilter(this.initialDate, this.mixedOps.dateFormat)
                    } else {
                        this.date = utility.dateFilter(this.initialDate, this.mixedOps.dateFormat + ' ' + this.mixedOps.timeFormat);
                    }
                } else if (this.initialDate !== '' && this.initialDate !== 0) {
                    this.date = this.initialDate;
                } else {
                    this.date = '';
                }
                this.$refs.date.value = this.date;
            },
            empty(e) {
                var date = this.date;

                e.stopPropagation();
                this.date = '';
                this.$refs.date.value = this.date;

                if(date !== this.date){
                    this.$emit('change', this.getDate());
                }
            }
        },
        mounted() {
            const that = this;
            const ops = {
                date_format: this.mixedOps.dateFormat,
                timeShow: this.mixedOps.type === 'date' ? 0 : 1,
                time_start: this.mixedOps.timeStart,
                timeBtn: this.mixedOps.timeBtn ? 1 : 0,
                clearBtn: 0,
                month_names: this.mixedOps.monthNames,
                short_month_names: this.mixedOps.shortMonthNames,
                short_month_names2: this.mixedOps.shortMonthNames2,
                short_day_names: this.mixedOps.shortDayNames,
                error_out_of_range: this.mixedOps.errorOutOfRange,
                selectable_days: this.mixedOps.selectableDays,
                non_selectable: this.mixedOps.nonSelectable,
                rec_non_selectable: this.mixedOps.recNonSelectable,
                start_of_week: this.mixedOps.startOfWeek,
                show_week: this.mixedOps.showWeek ? 1 : 0,
                select_week: this.mixedOps.selectWeek ? 1 : 0,
                week_label: this.mixedOps.weekLabel,
                date_min: this.mixedOps.dateMin,
                date_max: this.mixedOps.dateMax,
                change() {
                    const date = that.$refs.date.value;

                    that.date = date;
                    that.$emit('change', that.getDate(that.valueReadable));
                }
            };

            that.initDate();
            $(this.$refs.date).jdPicker(ops);
            if (this.date !== '') {
                this.$refs.date.value = this.date;
            }
        },
        watch: {
            initialDate() {
                this.initDate();
            }
        }
    }
</script>
<style scoped>
    .date-wrap {
        position: relative;
    }

    .end-wrap input {
        border-radius: 0 4px 4px 0!important;
    }

    .form-control-feedback {
        cursor: pointer;
        pointer-events: inherit;
    }

    .has-feedback {
        padding-right: 25px;
    }

    .has-feedback::-ms-clear {
        display: none;
    }

    .form-group-sm .form-control-feedback{
        width: 30px;
        height: 30px;
        line-height: 30px;
    }
    .form-group-lg .form-control-feedback{
        width: 46px;
        height: 46px;
        line-height: 46px;
    }

</style>

## date & dates

日期组件封装，分别封装单个时间/日期和开始结束时间/日期组合

## [在线demo](https://codepen.io/rubyisapm/pen/eWQMQB?editors=1010)

## 使用

从npm安装ct-adc-date

```
npm install ct-adc-date
```
在代码中使用

```
import {DateInput, DatesInput} from 'ct-adc-date';
Vue.component(DateInput.name,DateInput);
Vue.component(DatesInput.name,DatesInput);

或

new Vue({
    el: ...,
    components: {
        DateInput,
        DatesInput
    }
})
```

## 参数说明

### date参数说明

参数 | 描述 | 类型 | 默认值
--- | --- | --- | ---
initialDate | 开始日期初始值 | String,Number | ''
disabled | 是否将日期控件处于禁用状态 | Boolean | false
ops | 日期的配置项 | Object | 见备注

### dates参数说明

参数 | 描述 | 类型 | 默认值
--- | --- | --- | ---
initialBeginDate | 开始日期初始值(可以是符合格式的日期或者时间戳) | String,Number | ''
beginPlaceholder | 开始日期的placeholder | String | '请选择'
beginOps | 开始日期的配置项 | Object | 见备注
beginDisabled | 是否将开始日期控件处于禁用状态 | Boolean | false
initialEndDate | 结束日期初始值(可以是符合格式的日期或者时间戳) | String,Number | ''
endPlaceholder | 结束日期的placeholder | String | '请选择'
endOps | 结束日期的配置项 | Object | 见备注
endDisabled | 是否将结束日期控件处于禁用状态 | Boolean | false
related | 开始结束日期是否要联动 | Boolean | false

**备注:** 默认选项

```
{
    type:'date', //可选值: 'date': 日期; datetime':日期时间
    dateFormat:'yyyy-MM-dd', // 日期格式 如 yyyy/MM/dd
    timeFormat:'HH:mm:ss', // 时间格式 如 'hh:mm:ss'为12小时制的时间格式
    timeStart:'00:00:00', // 初始化时间
    timeBtn:true, // 是否显示时间按钮
    clearBtn: true, // 是否显示清空图标
    monthNames:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    shortMonthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    shortMonthNames2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
    errorOutOfRange: "选择的日期不符合规则",
    selectableDays: [0, 1, 2, 3, 4, 5, 6], //  可选择的天
    nonSelectable: [],
    recNonSelectable: [],
    startOfWeek: 1, // 每周的开始
    showWeek: false, // 是否显示周行头
    selectWeek: false, // 按周选择
    weekLabel: "周", //showWeek为true时，显示的周的列头内容
    dateMin: "",// 符合dateFormat设置的日期，如'2017-09-01' 注意：该参数只能用于配置日期 设置后小于该日期将无法被选择
    dateMax: "" // 符合dateFormat设置的日期，如'2017-09-01' 注意：该参数只能用于配置日期 设置后大于该日期将无法被选择
}
```

### 事件

#### change

单一日期组件的date的change事件返回该组件的结果日期，格式为组件选项中的定义格式。

开始结束日期组件dates的change事件返回一个对象，开始结束日期

当日期被清空时，则返回'';

### 方法

#### getDate

参数: readable 是否返回格式化的日期，如果为false，则返回时间戳

用于单一日期组件，获取当前的日期.

#### getDates

参数1: readable
是否返回格式化的日期，如果为false，则返回时间戳

参数2: endTransfered
如果开始结束日期为同一天，且选择类型为日期类型时，是否处理结束日期的时间戳，即是否需要加上一天的毫秒数-1;
如果开始结束日期为同一天，且选择类型为日期时间类型时，是否处理结束日期的时间戳，即是否需要999毫秒数;

用于开始结束日期组件，获取当前的开始结束日期

注：当type为'date'，且开发者希望获取结束日期的时间为23:59:59秒时，无需添加ops.timeStart属性，
只需将该方法的endTransfered参数设置为true即可

## 注意

组件中日期的传入支持时间戳，当检测到传入的初始日期为时间戳时会自动转换。
当获取时间时也可以获取时间戳格式的结果，但事件被触发时默认回传格式化的日期

## 已知的bug

1. 当设置type:datetime & ralated:true & dateMax dateMin 时，先选择前面的日期，后面的日期在点击input时被清空

## 依赖列表

### 2.1.2

jdpicker 1.0.0+

### 2.2.0

jdpicker 2.2.0+


## 更新日志

[更新日志](https://github.com/ct-adc/adc-date/blob/master/CHANGELOG.md)


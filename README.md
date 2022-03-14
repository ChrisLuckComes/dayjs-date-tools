# dayjs-date-tools

基于 dayjs 的常用时间工具函数，使用 typescript 编写，cypress 测试

## CHANGELOG

[CHANGELOG.md](/CHANGELOG.md)

## 安装

`npm i -S dayjs-date-tools`

下文函数均支持按需引用

## range

### getFirstDayAndEndDayOfMonth

获取日期所在月份的第一天和最后一天

```ts
getFirstDayAndEndDayOfMonth("2022-03", "YYYY-MM-DD"); //["2022-03-01","2022-03-31"]
```

### getFirstDayAndEndDayOfWeek

获取日期所在周的第一天和最后一天

```ts
getFirstDayAndEndDayOfWeek("2022-03-11", "YYYY-MM-DD"); //["2022-03-07","2022-03-13"]
```

### isBetween

判断日期是否在 start end 范围内

```ts
isBetween("2022-01-01", "2022-01-01", "2022-03-12"); //true
isBetween("2021-12-31", "2022-01-01", "2022-03-12"); //false
```

### diff

计算日期的差值

```ts
diff("2022-03-14 00:00:00", "2022-03-13 23:59:59"); //1000 不传unit默认为毫秒
diff("2022-03-14 00:00:00", "2022-03-13 23:59:59", "second"); //1 秒
diff("2022-03-14 00:00:00", "2022-03-13 23:59:00", "minute"); //1 分钟
diff("2022-03-14 1:00:00", "2022-03-13 22:00:00", "hour"); //1 小时
diff("2022-03-14", "2022-03-13", "day"); //1 天
diff("2022-03-13", "2022-03-06", "week"); //1 周
diff("2022-04", "2022-03", "month"); //1 月
diff("2023-03", "2022-03", "year"); //1 年
```

## compare

### isSameOrBefore

判断日期是否小于等于另一个日期

```ts
isSameOrBefore("2022-03-12", "2022-03-12"); //true
isSameOrBefore("2022-03-11", "2022-03-12"); //true
isSameOrBefore("2022-03-13", "2022-03-12"); //false
```

### isSameOrAfter

判断日期是否大于等于另一个日期

```ts
isSameOrBefore("2022-03-12", "2022-03-12"); //true
isSameOrBefore("2022-03-11", "2022-03-12"); //true
isSameOrBefore("2022-03-13", "2022-03-12"); //false
```

## format

### format

格式化日期

```ts
format("2022/03/14"); //2022-03-14 默认格式
format("2022-03-14", "YYYY/MM/DD"); //2022/03/14
format("2022-03-14", "YYYY-MM"); //2022-03
```

### getMonth

获取月份

```ts
getMonth("2022-03"); //3
```

### getChineseMonth

获取中文月份

```ts
getChineseMonth("2022-03"); //3月
```

### getWeek

获取当前周是全年第几周

```ts
getWeek("2022-01-02"); //52
getWeek("2022-12-31"); //52
getWeek("2022-01-03"); //1
getWeek("2022-01-10"); //2
```

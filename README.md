# dayjs-date-tools

基于 dayjs 的常用时间工具函数，使用 typescript 编写，cypress 测试

## CHANGELOG
[CHANGELOG.md](/CHANGELOG.md)

## 安装

`npm i -S dayjs-date-tools`

下文函数均支持按需引用

## getFirstDayAndEndDayOfMonth

获取日期所在月份的第一天和最后一天

```ts
getFirstDayAndEndDayOfMonth("2022-03", "YYYY-MM-DD"); //["2022-03-01","2022-03-31"]
```

## getFirstDayAndEndDayOfWeek
获取日期所在周的第一天和最后一天

```ts
getFirstDayAndEndDayOfWeek("2022-03-11", "YYYY-MM-DD");
```

## isInRange
判断日期是否在start end范围内
```ts
isInRange("2022-01-01", "2022-01-01", "2022-03-12"); //true
isInRange("2021-12-31", "2022-01-01", "2022-03-12"); //false
```

## isSameOrBefore
判断日期是否小于等于另一个日期
```ts
isSameOrBefore("2022-03-12", "2022-03-12"); //true
isSameOrBefore("2022-03-11", "2022-03-12"); //true
isSameOrBefore("2022-03-13", "2022-03-12"); //false
```

## isSameOrAfter
判断日期是否大于等于另一个日期
```ts
isSameOrBefore("2022-03-12", "2022-03-12"); //true
isSameOrBefore("2022-03-11", "2022-03-12"); //true
isSameOrBefore("2022-03-13", "2022-03-12"); //false
```
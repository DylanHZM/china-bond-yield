# 中国国债收益率曲线展示网站

基于 Chart.js 的中国国债收益率可视化工具。

## 使用方式

直接用浏览器打开 `index.html` 即可，无需构建或安装依赖。

## 功能

- 国债收益率曲线图（当日 vs 昨日对比）
- 关键期限收益率数据表（支持点击表头排序）
- 一键复制数据到剪贴板
- 深色/浅色双主题切换

## 数据更新

编辑 `data.js` 文件中的 `bondData` 对象：

| 字段 | 说明 |
|------|------|
| `today` | 当前数据日期 |
| `yesterday` | 对比日期 |
| `monthStart` | 月初日期 |
| `series[].yield` | 当日收益率(%) |
| `series[].prevYield` | 昨日收益率(%) |
| `series[].monthStartYield` | 月初收益率(%) |

## 推荐实时数据源

- [中国债券信息网](https://yield.chinabond.com.cn/) (官方)
- [World Government Bonds](https://www.worldgovernmentbonds.com/country/china/)

## 依赖

- Chart.js 4.x (CDN 加载)
- 支持现代浏览器的 JavaScript

## 许可

MIT

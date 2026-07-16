/**
 * 中国国债收益率数据
 * 数据来源：模拟参考数据，仅供参考
 * 如需接入实时数据，替换本文件中的 bondData 数组即可
 */

const bondData = {
  // 数据日期
  today: '2026-07-16',
  yesterday: '2026-07-15',
  monthStart: '2026-07-01',

  // 获取各期限标签
  labels: ['1M', '3M', '6M', '9M', '1Y', '2Y', '3Y', '5Y', '7Y', '10Y', '15Y', '20Y', '30Y'],

  // 每个期限的收益率数据
  // yield: 当日收益率(%), prevYield: 昨日收益率(%), monthStartYield: 月初收益率(%)
  series: [
    { label: '1M',  yield: 1.15, prevYield: 1.13, monthStartYield: 1.10 },
    { label: '3M',  yield: 1.20, prevYield: 1.18, monthStartYield: 1.15 },
    { label: '6M',  yield: 1.27, prevYield: 1.24, monthStartYield: 1.21 },
    { label: '9M',  yield: 1.32, prevYield: 1.29, monthStartYield: 1.26 },
    { label: '1Y',  yield: 1.38, prevYield: 1.35, monthStartYield: 1.32 },
    { label: '2Y',  yield: 1.48, prevYield: 1.45, monthStartYield: 1.42 },
    { label: '3Y',  yield: 1.58, prevYield: 1.55, monthStartYield: 1.53 },
    { label: '5Y',  yield: 1.75, prevYield: 1.72, monthStartYield: 1.68 },
    { label: '7Y',  yield: 1.92, prevYield: 1.88, monthStartYield: 1.85 },
    { label: '10Y', yield: 2.08, prevYield: 2.04, monthStartYield: 1.98 },
    { label: '15Y', yield: 2.22, prevYield: 2.18, monthStartYield: 2.12 },
    { label: '20Y', yield: 2.30, prevYield: 2.26, monthStartYield: 2.21 },
    { label: '30Y', yield: 2.38, prevYield: 2.34, monthStartYield: 2.28 }
  ],

  /**
   * 将 series 转换为 Chart.js 所需的 datasets 格式
   */
  toChartDatasets() {
    const labels = this.labels;
    const todayValues = this.series.map(s => s.yield);
    const yesterdayValues = this.series.map(s => s.prevYield);
    return { labels, todayValues, yesterdayValues };
  },

  /**
   * 计算日变动(bp) = (当日 - 昨日) * 100
   */
  dailyChange(label) {
    const item = this.series.find(s => s.label === label);
    if (!item) return null;
    return +((item.yield - item.prevYield) * 100).toFixed(1);
  },

  /**
   * 计算月初变动(bp) = (当日 - 月初) * 100
   */
  monthChange(label) {
    const item = this.series.find(s => s.label === label);
    if (!item) return null;
    return +((item.yield - item.monthStartYield) * 100).toFixed(1);
  }
};

// 暴露到全局
if (typeof module !== 'undefined' && module.exports) {
  module.exports = bondData;
}

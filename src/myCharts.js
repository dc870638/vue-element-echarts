import echarts from 'echarts'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },

                    chart2(id) {
                        this.chart = echarts.init(document.getElementById(id));
                        var data = [];

                        for (var i = 0; i <= 100; i++) {
                            var theta = i / 100 * 360;
                            var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                            data.push([r, theta]);
                        }

                        const option = {
                            title: {
                                text: '极坐标双数值轴'
                            },
                            legend: {
                                data: ['line']
                            },
                            polar: {},
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            angleAxis: {
                                type: 'value',
                                startAngle: 0
                            },
                            radiusAxis: {},
                            series: [{
                                coordinateSystem: 'polar',
                                name: 'line',
                                type: 'line',
                                data: data
                            }]
                        };
                        this.chart.setOption(option)
                    }

                }
            }
        }
    })
}

export default {
    install
}
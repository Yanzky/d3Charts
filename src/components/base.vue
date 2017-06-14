<template>
  <div id="base">
    <h1>你好，我是base文件</h1>
    <div class="loading" v-show='loading'>LOADING...</div>
    <div class="box">
      <div class="box-header">
        <span class='box-title'>{{ header.titleMajor }}</span>
        <span class='box-title-suber'>{{ header.titleSmall}}</span>
      </div>
      <div class='box-footer'>
        <!--<span v-for='item of charts.data' class='lable{{ $index + 1 }}'> <i class='icon{{ $index + 1 }}'>{{ item.label}}</i></span>-->
        <span v-for='(value, index) in charts.data' class='lable'> <i class='icon'>{{ value.label}}</i></span>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  #base {
    color: red;
  }
</style>
<script>
  export default {
    data () {
      return {
        header: {},
        charts: {
          data: [
            {
              label: ''
            },
            {
              label: ''
            }
          ]
        },
        loading: true
      }
    },
    methods: {
      testLine () {
        this.initCharts({
          header: {
            titleMajor: 'vCPU',
            titleSmall: '个',
            value1: '15,000',
            value2: '25,000',
            label1: '当前分配量',
            label2: '当前总量'
          },
          charts: {
            type: 'line',
            xLabel: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            data: [
              {
                label: 'vCPU历史总量',
                values: [3000, 2500, 4000, 1800, 3900, 2600, 2500, 3500, 3800]
              },
              {
                label: 'vCPU历史分配量',
                values: [1800, 2000, 3500, 1100, 2900, 1900, 2000, 2500, 2800]
              }
            ]
          }
        })
      },
      initCharts (obj) {
        /* this.$set(this.header, 'header', obj.header) */
        /* this.$set(this.charts, 'charts', obj.charts) */
        /* this.loading = false */
        this.header = Object.assign({}, this.header, obj.header)
        this.charts = Object.assign({}, this.charts, obj.charts)
        this.loading = false
      }
    },
    mounted () {
      window.entry = this
      if (typeof window.ready === 'function') {
        window.ready()
      }
      this.testLine()
    }
}
</script>

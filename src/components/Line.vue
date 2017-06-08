<template>
    <div class="loading" v-show='loading'>LOADING...</div>

    <div class="box">

      <div class="box-header">
        <span class='box-title'>{{ header.titleMajor }}</span>
        <span class='box-title-suber'>{{ header.titleSmall}}</span>
      </div>

      <div class='box-info'>
        <div class='box-small-caption'>
          <span class='first-caption'>{{ header.label1 }}</span>
          <em>/</em>
          <span class='sec-caption'>{{ header.label2 }}</span>
        </div>
        <div class='box-caption'>
          <span class='first-caption'>{{ header.value1 }}</span>
          <em>/</em>
          <span class='sec-caption'>{{ header.value2 }}</span>
        </div>
      </div>

      <div class='box-charts'></div>

      <div class='box-footer'>
        <span v-for='item of charts.data' class='lable{{ $index + 1 }}'> <i class='icon{{ $index + 1 }}'>{{ item.label}}</i></span>
      </div>
    </div>
</template>
<style>
</style>
<script>
    import d3 from 'd3'
    export default{
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
        testSpline () {
          this.initCharts({
            header: {
              titleMajor: '存储',
              titleSmall: 'TB',
              value1: '15,000',
              value2: '26,000',
              label1: '当前分配量',
              label2: '当前总量'
            },
            charts: {
              type: 'spline',
              xLabel: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
              data: [
                {
                  label: '存储历史总量',
                  values: [3000, 2500, 4000, 1800, 3900, 2600, 2500, 3500, 3800]
                },
                {
                  label: '存储历史分配量',
                  values: [1800, 2000, 3500, 1100, 2900, 1900, 2000, 2500, 2800]
                }
              ]
            }
          })
        },
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
          var func = {
            line (data, index) {
              var data1 = []
              var offset = 0
              for (var i = 0; i < data.values.length; i++) {
                if (data.values[i] !== null) {
                  data1.push(data.values[i])
                } else {
                  offset = i + 1
                }
              }
              var line = d3.line()
                .x((d, i) => { return x(offset + i + 1) })
                .y((d) => { return y(d) })

              svg.append('path')
                .datum(data1)
                .attr('class', 'line line-' + index)
                .attr('d', line)

              svg.selectAll('circle1')
                .data(data)
                .enter()
                .append('g')
                .append('circle')
                .attr('class', 'line-circle')
                .attr('cx', line.x())
                .attr('cy', line.y())
                .attr('r', 4.5)
            },
            spline (data, index) {
              var data1 = []
              var offset = 0
              for (var i = 0; i < data.values.length; i++) {
                if (data.values[i] !== null) {
                  data1.push(data.values[i])
                } else {
                  offset = i + 1
                }
              }
              var area = d3.area()
                .curve(d3.curvueBasis)
                .x((d, i) => { return x(offset + i + i) })
                .y0((height))
                .y1((d) => { return y(d) })
              var line = d3.line()
                .curve(d3.curveBasis)
                .x((d, i) => { return x(offset + i + 1) })
                .y((d) => { return y(d) })
              svg.append('path')
                .datum(data1)
                .attr('class', 'line line-' + index)
                .attr('d', line)
              svg.append('path')
                .datum(data1)
                .attr('class', 'area area-' + index)
                .attr('d', area)
            }
          }
          this.$set('header', obj.header)
          this.$set('charts', obj.charts)
          this.$set('loading', false)
          var el = document.querySelector('.box-charts')
          var footer = document.querySelector('.box-footer')
          var info = document.querySelector('.box-info')
          el.innerHTML = ''
          el.style.height = (footer.offsetTop - info.clientHeight - 30) + 'px'

          var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
          }

          var width = el.clientWidth - margin.left - margin.right
          var height = el.clientWidth - margin.top - margin.bottom

          this.d3Obj = d3.select('.box-charts')
          var container = this.d3Obj
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)

          var svg = container.append('g')
            .attr('class', 'content')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

          var x = d3.scaleLinear()
            .domain([1, obj.charts.xLabel.length])
            .range([0, width])

          var y = d3.scaleLinear()
            .domain([0, Math.max(d3.max(obj.charts.data[0].values, obj.charts.data[1].values))])
            .range([height, 0])

          var tArr = y.ticks()
          y.domain([0, (tArr[1] - tArr[0]) * tArr.length])

          svg.append('g')
            .attr('class', 'grid')
            .attr('transform', 'translate(0, ' + height + ')')
            .call(d3.axisBottom(x).ticks(10).tickSize(-height).tickFormat(''))

          svg.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft(y).ticks(10).tickSize(-width).tickFormat(''))

          svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0, ' + height + ')')
            .call(d3.axisBottom(x).tickFormat((d, index) => {
              return obj.charts.xLabel[index]
            }))

          svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(y))

          obj.charts.data.forEach((item, i) => {
            func[obj.charts.type](item, i + 1)
          })
        }
      },

      ready () {
        window.entry = this
        if (typeof window.ready === 'function') {
          window.ready()
        }
        this.testLine()
      }

    }
</script>

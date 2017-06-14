<template>
  <div id='baseBar'>
    <div class='bar'></div>
  </div>
</template>
<style lang="scss" scoped>
  #baseBar {

  .bar {
    margin:auto;
  }

  }
</style>
<script>
  import * as d3 from 'd3'

  export default {
    data () {
      return {
        data: [20, 50, 80],
        r: 150
      }
    },
    methods: {
      initCharts () {
        var canvas = d3.select('.bar').append('svg')
          .attr('width', 500)
          .attr('height', 500)
        var color = d3.scaleOrdinal()
          .range(['orange', 'red', 'green'])
        var group = canvas.append('g')
          .attr('transform', 'translate(200, 200)')
        var arc = d3.arc()
          .innerRadius(80)
          .outerRadius(this.r)
        var pie = d3.pie()
          .value(function (d) {
            return d
          })
        var arcs = group.selectAll('.arc')
          .data(pie(this.data))
          .enter()
          .append('g')
          .attr('class', 'arc')
        arcs.append('path')
          .attr('d', arc)
          .attr('fill', function (d) {
            return color(d.data)
          })
        arcs.append('text')
          .attr('transform', function (d) {
            return 'translate(' + arc.centroid(d) + ')'
          })
          .attr('text-anchor', 'middle')
          .attr('font-size', '1.5em')
          .text(function (d) {
            return d.data
          })
      }
    },
    mounted () {
      window.entry = this
      if (typeof window.ready === 'function') {
        window.ready()
      }
      this.initCharts()
    }
  }
</script>

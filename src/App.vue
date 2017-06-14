<template>
  <div id="app">
    <!--此处的router-link可以省略，直接在地址输入路径也可以访问子页面-->
    <!--<router-link to="/base">点击我进入base页面</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  $color1: #27eb9f;
  $color2: #91e8fe;
  $line1Color: #25e746;
  $line2Color: #91e8fe;

  .charts-info {
    position: absolute;
    z-index: 9999;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;

    .charts-info-major {
      font-size: 2.5rem;
    }
  }

  .charts {
    width: 100%;
    height: 100%;
  }

  .chart-filled {
    fill: steelblue;
  }
  .chart-empty {
    fill: #dedede;
  }

  .needle, .needle-center {
    fill: #464A4F;
  }

  .arc-1 path {
    stroke: #0075aa;
  }

  .arc-2 path {
    stroke: #ac3039;
  }

  .clear:after { clear:both;content:".";display:block;height:0;visibility:hidden; overflow:hidden; }
  .grid line {
    stroke: #1d4369;
    stroke-opacity: 0.7;
    stroke-dasharray: (3, 3);
    shape-rendering: crispEdges;
  }

  .grid path {
    stroke-width: 0;
  }

  .axis {
    stroke: white;
    fill: none;
  }

  .area {
    opacity: 0.5;
  }

  .bar {
    opacity: 0.8;
  }

  .bar-1,
  .area-1 {
    fill: $line1Color;
  }

  .bar-2,
  .area-2 {
    fill: $line2Color;
  }

  .axis path,
  .axis line {
    fill: none;
    stroke: white;
    shape-rendering: crispEdges;
  }

  .line-circle {
    stroke: #78d3fb;
    fill: none;
  }

  .line-circle-lager {
    fill: #78d3fb;
    opacity: 0.5;
  }

  .line {
    fill: none;
    stroke-width: 1.5px;
  }

  .line-1 {
    stroke: $line1Color;
  }

  .line-2 {
    stroke: $line2Color;
  }

  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: "Helvetica Neue", Helvetica,Arial, "Microsoft YaHei", "微软雅黑", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: transparent;
  }
  #app {
    width: 100%;
    height: 100%;
  }

  #line {
    height: 100%;
    width: 100%;
  }

  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999;
    background: rgba(6, 19, 28, 1);
    padding-top: 20%;
    color: $color2;
    text-align: center;
  }

  .box {
    background: rgba(6, 19, 28, 0.5);
    color: $color2;
    height: 100%;
    width: 100%;
    position: relative;
    /*overflow: hidden;*/

    .box-header {
      position: absolute;
      left: 2rem;
      top: 1.5rem;

      .box-title {
        color: $color2;
        font-size: 2rem;
      }
    }

    .box-info {
      position: absolute;
      right: 1rem;
      top: 1rem;
      text-align: right;

      .first-caption {
        color: $color1;
      }

      .box-small-caption {
        font-size: 0.8rem;
      }

      .box-caption {
        font-size: 2rem;
      }
    }

    .box-charts {
      position: absolute;
      right: 0;

      left: 0;
      top: 5rem;
      margin: auto;
      width: calc(100% - 5rem);
    }

    .box-footer {
      $height: 3rem;
      position: absolute;
      bottom: 1rem;
      left: 2rem;

      span.label1 {
        color: $line1Color;
      }

      span.label2 {
        color: $line2Color;
      }

      span {
        $size: 0.8rem;

        font-size: $size;

        &:last-child {
          margin-right: 0;
        }

        margin-right: 2rem;

        i {
          display: inline-block;
          height: 2px;
          width: 2rem;
          margin-right: 0.5rem;
          top: -3px;
          position: relative;
        }

        i.icon1 {
          background: $line1Color;
        }

        i.icon2 {
          background: $line2Color;
        }
      }
    }


    .box-header-1 {
      margin-left: 1rem;
      margin-top: 1.5rem;

      .box-title {
        font-size: 2rem;
      }
    }

    .box-info－1 {
      width: 100%;
      .box-info-1-item {
        width: 50%;
        float: left;
        &:last-child {
          text-align: right;
        }
        .first-caption {
          font-size: 2.5rem;
        }
      }
    }

    .box-footer-1 {
      box-sizing: border-box;
      padding: 1.5rem;
      $height: 3rem;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .line1 {
      padding-bottom: 1.5rem;
      padding-top: 0;
      border-bottom: 1px dashed #2f464f;
    }

    .list-group {
      .list {
        padding: 0 1.5rem;
        display: block;
        margin-top: 2px;
        position: relative;
        background: #003f66 url('assets/exclamation.png') no-repeat 1rem 50%;
        background-size: 1.8rem 1.8rem;
        text-align: right;
        height: 3rem;

        span:first-child {
          display: block;
          height: 1.3rem;
          position: absolute;
          left: 3.5rem;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        span:last-child {
          font-size: 2.5rem;
          color: #e93f45;
        }

        &:first-child {
          margin-top: 1rem !important;
        }

        &:nth-child(2) {
          background-color: #003857;
          span:last-child {
            color: #ee7b51;
          }
        }

        &:nth-child(3) {
          background-color: #002e47;
          span:last-child {
            color: #ffec80;
          }
        }

        &:nth-child(4) {
          background-color: #002030;
          span:last-child {
            color: #85ce64;
          }
        }
      }
    }

  }

</style>

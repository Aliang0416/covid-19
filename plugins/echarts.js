import { def } from "@vue/shared"
import * as echarts from "echarts"
import china from "../src/assets/json/china.json"

export default {
    install: app => {
        app.config.globalProperties.$china = (element, data) => {
            var myChart = echarts.init(document.getElementById(element));
            echarts.registerMap("china", china);
            var option = {
                // 鼠标点击弹出框
                tooltip: {
                    triggerOn: "click", // 点击触发
                    enterable: true // 是否可以出现弹出框
                },
                visualMap:{
                    type:"piecewise",
                    pieces:[
                        {min:0,max:0,color:"#fff"},
                        {min:1,max:10,color:"#fdfdcf"}, 
                        {min:10,max:100,color:"#fe9e83"},
                        {min:100,max:1000,color:"#e55a4e"},
                        {min:1000,max:100000,color:"#7e0101"},
                        {min:100000,max:1000000,color:"#3a0101"},
                    ]
                }, 
                series: [{
                    name: "中国地图",
                    type: "map",
                    map: "china",
                    roam: false, // 是否可以缩放
                    zoom: 1.2, // 地图默认缩放倍数
                    label: {
                        show: true, // 是否显示地图上的文本
                        fontSize: 8 // 文本的字体大小
                    },
                    itemStyle:{
                        areaColor:"rgba(255,255,255,1)",
                        borderColor:"rgba(0,0,0,0.2)"
                    },
                    // 配置各个省的数据
                    data
                }]
            }
            myChart.setOption(option);
        }
    }
}
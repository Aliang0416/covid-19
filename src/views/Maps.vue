<template>
    <div class="map">
        <p class="title">疫情地图</p>
        <div v-if="loading" class="loading">等待加载数据...</div>
        <div class="china" id="china"></div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name: "Maps",
    data() {
        return {
            loading:true
        }
    },
    mounted() {
        axios.get("http://iwenwiki.com/wapicovid19/all.php")
        .then(res =>{
            console.log(res.data);
            this.loading = false
            // 拿到的数据和我们需要的数据格式不同
            // 数据过滤，遍历数据，整理成我们需要的格式
            // [{name:"北京",value:100}]
            let allCitys = [];
            for(var i = 0;i<res.data.retdata.length;i++){
                var temp = {
                    name:res.data.retdata[i].xArea,
                    value:res.data.retdata[i].curConfirm
                }
                allCitys.push(temp)
            }
            this.$china("china",allCitys)
        })
    }
}

</script>

<style scoped>
.map {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
}

.map .title {
    font-size: 15px;
    font-weight: 700;
    padding-left: 10px;
    padding-top: 10px;
}

.china {
    width: 100%;
    height: 400px;
    background-color: #f1f1f1;
}
</style>
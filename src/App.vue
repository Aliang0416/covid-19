<template>
  <Header />
  <CaseNumber :caseNums="caseNums"/>
  <Maps />
</template>

<script>
import Header from './views/Header.vue'
import CaseNumber from './views/CaseNumber.vue'
import Maps from "./views/Maps.vue"
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Header,
    CaseNumber,
    Maps
  },
  data(){
    return{
      caseNums:{
      }
    }
  }, 
  mounted(){
    axios.get("http://api.tianapi.com/ncov/index",{
      params:{
        key:"5a317bce264083674b7a4401ce7c1363"
      }
    }).then(res=>{
        let{modifyTime,currentConfirmedCount,confirmedCount,suspectedCount,curedCount,deadCount,seriousCount,currentConfirmedIncr,confirmedIncr,suspectedIncr,curedIncr,deadIncr,seriousIncr} = res.data.newslist[0].desc;
        this.caseNums = {
          // 截止时间
          modifyTime,
          // 现存确诊
          currentConfirmedCount,
          // 累计确诊
          confirmedCount,
          // 累计境外输入
          suspectedCount,
          // 累计治愈
          curedCount,
          // 累计死亡
          deadCount,
          // 现存无症状
          seriousCount,
          // 现存确诊较昨日
          currentConfirmedIncr,
          // 累计确诊较昨日
          confirmedIncr,
          // 累计境外输入较昨日
          suspectedIncr,
          // 累计治愈较昨日
          curedIncr,
          // 累计死亡较昨日
          deadIncr,
          // 现存无症状较昨日
          seriousIncr

        }
    })
  }
}
</script>


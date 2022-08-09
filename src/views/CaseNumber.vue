<template>
    <div class="case-num">
        <div class="continer">
            <div class="title">
                <span>截止到{{formatData(caseNums.modifyTime)}}中国疫情数据情况 </span>
            </div>
        </div>
        <div class="num">
            <ul class="count">
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(247,76,49);"> + {{ caseNums.currentConfirmedIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(247,76,49);">{{ caseNums.currentConfirmedCount }}</strong>
                    <span>现存确诊</span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(247,130,7);"> + {{ caseNums.confirmedIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(247,130,7);">{{ caseNums.confirmedCount }}</strong>
                    <span>累计确诊</span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(247,130,7);"> +{{ caseNums.suspectedIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(247,130,7);">{{ caseNums.suspectedCount }}</strong>
                    <span>累计境外输入</span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(126,90,78);"> +{{ caseNums.curedIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(126,90,78);">{{ caseNums.curedCount }}</strong>
                    <span>累计治愈</span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(174,33,44);"> +{{ caseNums.deadIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(174,33,44);">{{ caseNums.deadCount }}</strong>
                    <span>累计死亡</span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color: rgb(93,112,146);"> {{ caseNums.seriousIncr }}</em></b>
                    </div>
                    <strong style="color: rgb(93,112,146);">{{ caseNums.seriousCount }}</strong>
                    <span>现存无症状</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "CaseNumber",
    props:{
        caseNums:{
            type:Object,
            // 数组和对象的默认值要使用函数返回。工厂模式
            default:function(){
                return{}
            }
        }
    },
    methods:{
        formatData(data){
            var date = new Date(data);
            var YY = date.getFullYear() + "年";
            var MM = date.getMonth() + 1 + "月";
            var DD = date.getDate() + "日";
            return YY + MM + DD;
        }
    }
}
</script>
<style scoped>
.case-num{
    padding: 0.16rem;
    background: #fff;
}

.container{
    margin: -0.16rem 0 0;
    font-size: 0.12rem;
}

.title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0 0 0.07rem;
    line-height: 0.24rem;
}

.title span{
    color: #666;
    font-size: 20px;
    margin-top: -10px;
    margin-bottom: 5px;
}
.num {
    position: relative;
    text-align: center;
    background: #fff;
}
.num::after {
    position: absolute;
    top: 3px;
    left: 1px;
    display: block;
    width: 200%;
    height: 200%;
    border: 3px solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.08rem 0.12rem 0 rgba(0, 0, 0, 0.05);
    transform: scale(0.5);
    transform-origin: 0 0;
    content: "";
}
.num ul {
    flex-flow: wrap;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.08rem 0 0.12rem;
}
.num ul li {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 33.3333333%;
    margin: 10px 0;
}
.num ul li .create-item {
    position: relative;
    text-align: center;
}
.num ul li .create-item .create-count {
    display: flex;
    align-items: center;
    height: 0.12rem;
    margin-bottom: 0.02rem;
    color: #666;
    font-weight: 400;
    font-size: 0.09rem;
}
.num ul li .create-item .create-count em {
    font-weight: 400;
    font-style: normal;
}
.num ul li strong {
    margin-bottom: 0.01rem;
    font-weight: 700;
    font-size: 0.2rem;
    line-height: 0.25rem;
}
.num ul li span {
    display: block;
    color: #333;
    font-weight: 700;
    font-size: 0.11rem;
    line-height: 0.15rem;
}
</style>
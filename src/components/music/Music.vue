<template>
	<div class="music">
        <!-- <common-header title="Only" bgColor="#999"></common-header> -->
        <div class="wrapper">
            <div class="img-wrapper">
                <img src="https://api.yingjoy.cn/pic/?t=bing&w=1366" alt="">
            </div>
            <div class = "time">
                <p>
                    <span>{{today.getDate()}}</span>
                    <span>{{today.toDateString().split(" ")[1]}}.{{today.getFullYear()}}</span>
                </p>
                <p>
                    <span>「 </span>
                    <span>{{lan.hitokoto}}</span>
                    <!-- <span v-if="lan.hitokoto">{{lan.hitokoto.length > 36 ? lan.hitokoto.substring(0,36).concat('...'): lan.hitokoto}}</span> -->
                    <span v-if="lan.from">—— {{lan.from.length > 10 ? lan.from.substring(0,10).concat('...'): lan.from}}</span>
                    <span> 」</span>
                </p>
            </div>
            <div v-for="(item,index) in list" :key="index" v-show="item.pic">
                <p>{{item.title}}</p>
                <img :src="item.pic" alt="">
            </div>
        </div>
        <!-- <common-footer bgColor="rgb(0, 150, 136)"></common-footer> -->
	</div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
    data(){
        return{
            list:[],
            today: new Date(),
            lan: {}
        }
},
mounted(){
    const m = this.today.getMonth()
    const d = this.today.getDate()
    Axios.get(API_PROXY + "https://v1.hitokoto.cn/?encode=json")
        .then((res)=>{
            this.lan = res.data
            }).catch(
            (err) => {
                console.log(err)
            }
        )
    // Axios.get(API_PROXY + "http://lorempixel.com/400/200/")
    //     .then((res)=>{
    //         console.log(res)
    //         }).catch(
    //         (err) => {
    //             console.log(err)
    //         }
    //     )
	//  Axios.get(API_PROXY + "http://api.juheapi.com/japi/toh?key=b4ae0ecc018fdb8a547589a7f524eb61&v=1.0&month=2&day=19")
    //     .then((res)=>{
    //         this.list = res.data.result
    //         }).catch(
    //         (err) => {
    //             console.log(err)
    //         }
    //     )
},
  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>
.time{
    display: flex;
    height: 4rem;
    position: relative;
    margin-top: 1rem;
}
.time p:nth-child(1){
    width: 35%;
    text-align: center;
    color: #333;
    line-height: 1rem;
}
.time p:nth-child(1) span:nth-child(1){
    font-size: 0.8rem;
}
.time p:nth-child(2){
    width: 65%;
    font-size: 0.32rem;
    line-height: 0.45rem;
    color: #999;
    position: relative;
}
.time p:nth-child(2) span{
    display: block;
}
.time p:nth-child(2) span:nth-child(1){
    position: absolute;
    left: 0;
    top: 0;
}
.time p:nth-child(2) span:nth-child(2){
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    line-height: 0.5rem;
}
.time p:nth-child(2) span:nth-child(3){
    width: 80%;
    font-size: 0.25rem;
    text-align: right;
    position: absolute;
    bottom: 0;
    left: 10%;
}
.time p:nth-child(2) span:nth-child(4){
    position: absolute;
    right: 0;
    bottom: 0;
}
.img-wrapper{
    width: 100%;
    height: 4rem;
}
.img-wrapper img{
    width: 100%;
}
</style>


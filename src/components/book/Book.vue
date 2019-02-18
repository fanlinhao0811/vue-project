<template>
	<div class="book">
			<common-header nav="<" title="book" bgColor="rgb(121, 85, 72)"></common-header>
			 <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img :src="item.cover" alt="">
          </div>
        </div>
      </div>
      <div class="item-wrapper" v-for="(item,index) in list" :key="index" @click="linkTo(item.bid)">
        <img :src="item.cover" alt="" class="item-cover">
        <div class="item">
          <p class="item-title">{{item.title}}</p>
          <p class="item-author"><span>{{item.author}}</span><span>{{set_num(item.reads,'万观看')}}</span></p>
          <span class="item-words">{{set_num(item.words,'万字')}}</span>
          <span class="item-tags" v-for="i in set_tag(item.tags)">{{i}}</span>
        </div>
      </div>
      <div class="zhanwei"></div>
			<common-footer bgColor="rgb(121, 85, 72)"></common-footer>
	</div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {Swipe,SwipeItem} from 'vue-swipe'
import Axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return{
      list:null,
      swiperList:null
    }
  },
	components:{
		CommonHeader,
		CommonFooter,
		Swipe,
		SwipeItem
  },
  created(){
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        autoplay:true,
        loop: true,
        // slidesPerView: 3,
        // spaceBetween: 30
      })
    })

    Axios.get(API_PROXY + "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5=&_=1550470669468")
      .then((res)=>{
        this.list = res.data.data
      }).catch(
        (err) => {
          console.log(err)
        }
      )
    Axios.get(API_PROXY + "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1550502104147")
      .then((res)=>{
        this.swiperList = res.data.data
      }).catch(
        (err) => {
          console.log(err)
        }
      )  
  },
  // mounted(){
  //   new Swiper('.swiper-container', {
  //       autoplay:true,
  //       loop: true,
  //       // slidesPerView: 3,
  //       // spaceBetween: 30
  //     })
  // },
  methods:{
    set_num(item,desc){
      const items = item.toString()
      const a = items.substr(-4)
      return items.replace(a,desc)
    },
    set_tag(item){
      return item.split(',').slice(0,2)
    },
    linkTo(id){
      window.open(`http://t.shuqi.com/route.php?pagename=#!/ct/cover/bid/${id}`)
    }
  }
}
</script>
<style>
  .swiper-container {
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ccc;
    width: 33%;
    padding-top: 0.2rem;
  }

  .swiper-slide img{
    width: 1.5rem;
  }

  .item{
    width: 100%;
  }

.item-wrapper{
  display: flex;
  padding: .4rem .32rem;
}

.item-cover{
  display: block;
  width: 1.12rem;
  height: 1.48rem;
  margin-right: 0.32rem;
}

.item-title{
  color: #333;
  font-size: .32rem;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  height: .36rem;
  line-height: .36rem;
  margin-bottom: .22rem;
}

.item-author{
  display: flex;
  justify-content: space-between;
  height: .32rem;
  line-height: .32rem;
  font-size: .24rem;
  color: #999;
}

.item-words{
  font-size: .2rem;
  height: .34rem;
  line-height: .36rem;
  border: 1px solid rgba(153,153,153,.3);
  border-radius: .04rem;
  padding: .01rem .12rem;
  margin-right: .08rem;
  margin-top: .15rem;
  color: #999;
  display: inline-block;
}

.item-tags{
  font-size: .2rem;
  height: .34rem;
  line-height: .36rem;
  border: 1px solid rgba(153,153,153,.3);
  border-radius: .04rem;
  padding: .01rem .12rem;
  margin-right: .2rem;
  margin-top: .15rem;
  padding-top: .01rem;
  color: #999;
  display: inline-block;
}
.zhanwei{
  height: 1rem;
}
</style>


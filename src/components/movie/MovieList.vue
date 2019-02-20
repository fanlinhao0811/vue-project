<template>
  <div class="top250">
		<img :src="img" class="item-img">
		<div class="movie-title">
			<span class="title">{{title}}</span>
			<p class="desc"> 主演：{{desc.length > 16 ? desc.substring(0,16).concat('...') : desc}}</p>
      <p v-if="avg !== 0" class="avg">观众评<span>{{avg}}</span>分</p>
      <p v-else class="avg">即将上映</p>
      <div class="buy" @click="link(id)">More</div>
		</div>
	 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['title','avg','desc','id','img'],
  methods:{
    link(item) {
      window.location.href = `https://maoyan.com/cinemas?movieId=${item}`
    }
  }
}
</script>

<style scoped>
	.top250{
    display: flex;
    padding: .4rem .32rem;
    position: relative;
  }
  .item-img{
    display: block;
    width: 1.12rem;
    height: 1.48rem;
    margin-right: 0.32rem;
  }
  .movie-title{
    height: 1.48rem;
  }
  .title{
    color: #333;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    height: .36rem;
    line-height: .36rem;
  }
  .desc{
    font-size: .22rem;
    color: #999;
    margin-top: 0.2rem;
  }
  .avg{
    font-size: .22rem;
    color: #999;
    margin-bottom: 0;
  }
  .avg span{
    color: #faaf00;
    font-size: .32rem;
  }
  .buy{
    width: 1rem;
    height: 0.5rem;
    color: #333;
    background: rgb(33, 150, 243);
    border-radius: 10px;
    line-height: 0.5rem;
    text-align: center;
    position: absolute;
    top: 1rem;
    right: 0.3rem;
  }
</style>

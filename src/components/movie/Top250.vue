<template>
   <div class='list'>
        <movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm" :id="obj.id"
        :avg = "obj.sc" :img = "obj.img.replace('w.h/','')" :desc = "obj.star"
        ></movie-list>
   </div>
</template>
<script>
import MovieList from './MovieList'
import Axios from 'axios'
export default {
  data () {
    return {
      movieList: [],
    }
  },
  mounted(){
    let _this = this
    window.onscroll = function(){
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let htmlHeight = document.documentElement.scrollHeight
      if(scrollTop + clientHeight >= htmlHeight){
          _this.isShow = true
          _this.loadData()
      }
    }
    this.loadData()
  },
  methods:{
    loadData(){
      //  Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10")
       Axios.get(API_PROXY + "http://m.maoyan.com/ajax/movieOnInfoList?token=")
        .then((res)=>{
          this.movieList = this.movieList.concat(res.data.movieList);
          this.isShow    = false;
        }).catch(
          (e)=>{
            console.log(e)
          }
        );
    }
  },
  components:{
      MovieList
  }
}
</script>
<style scoped>
    .list{
       margin: 0 0 1.6rem;
    }
</style>
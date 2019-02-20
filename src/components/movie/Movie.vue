<template>
  <div class="movie">
      <common-header title="movie" nav="首页" bgColor="rgb(33, 150, 243)">
				<p>首页</p>
			</common-header>
      <!-- <movie-nav></movie-nav> -->
      <router-view></router-view>
      <div class='loading' v-show="isShow">
        <img src="/static/img/loading.gif" alt="">
      </div>
      <common-footer bgColor="rgb(33, 150, 243)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import MovieNav from "./MovieNav"
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow   : false
    }
  },
  components: {
    CommonHeader,
    CommonFooter,
    MovieNav
  }
}
</script>

<style scoped>
  .movie{
    padding-top: 1rem;
  }
  .loading{
      margin-bottom: 1rem;
      text-align   : center;
  }
</style>

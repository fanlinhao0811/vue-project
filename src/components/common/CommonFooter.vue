<template>
  <div class="footer" :style="{background:bgColor}">
   <ul>
		 <li><router-link to='/movie/top250'>电影</router-link></li>
		 <li><router-link to='/music'>Now</router-link></li>
		 <li><router-link to='/book'>书籍</router-link></li>
		 <li><router-link to='/photo'>图片</router-link></li>
	 </ul>
  </div>
</template>

<script>
export default {
	props:['bgColor']
}
</script>

<style scoped>
  .footer {
    height: 1rem;
    background: rgb(33, 150, 243);
    position: fixed;
    bottom:0;
    width:100%;
    max-width: 750px;
    left: 50%;
    transform: translateX(-50%);
  }
  .footer ul{
    display: flex;
    justify-content: space-around;
  }
  .footer li{
    text-align : center;
    line-height:1rem; 
  }
  .footer li a{
    color: #ccc;
  }
  .footer li a.router-link-active{
    color: #fff;
  }
</style>

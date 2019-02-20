<template>
  <div class="nav">
    <ul>
		 <li><router-link to="/movie/hot">正在热映</router-link></li>
		 <li><router-link to="/movie/coming">即将上映</router-link></li>
	 </ul>
	 </div>
</template>

<style scoped>
  .nav{
    height: 0.5rem;
    background: rgb(33, 150, 243);
    color: #fff;
    margin-top: 1rem;
  }
  .nav ul{
    display: flex;
  }
  .nav li{
    flex: 1;
    color:#fff;
    text-align : center;
    line-height: 0.5rem; 
  }
  .nav li a{
    color: #ccc;
  }
  .nav li a.router-link-active{
    color: #fff;
  }

</style>

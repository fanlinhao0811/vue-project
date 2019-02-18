<template>
  <div class="header" :style="{background:bgColor}">
    <slot>
		  <p @click="back">{{nav}}</p>
		</slot>
		<h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:['title','bgColor','nav'],
	methods:{
		back(){
			history.go(-1);
		}
	}
}
</script>

<style scoped>
  .header{
    height: 1rem;
    background: rgb(33, 150, 243);
    color: #fff;
    width: 100%;
    max-width: 750px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
  }
  .header p{
    color : #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
  }
  .header h2{
    text-align : center;
  }
</style>

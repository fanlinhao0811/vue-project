<template>
	<div class="photo">
		<common-header title="photo" nav="<" bgColor="rgb(63, 81, 181)"></common-header>
		<ul class="photo-list">
			<li v-for="(photo,index) in photoList" :key="index">
				<img :src="photo.src" alt="">
			</li>
		</ul>
		<common-footer bgColor="rgb(63, 81, 181)"></common-footer>
	</div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
	data(){
		return {
			photoList:[]
		}
	},
	mounted(){
		Axios.get('/static/photo-data.json').then(
			(res)=>{
				this.photoList = res.data.photoData;
			}
		)
	},
	components:{
		CommonHeader,
		CommonFooter,
	}
}
</script>
<style>
	.photo-list{
		margin: 1rem 0;
		height: 100%;
		overflow: scroll;
	}
	.photo-list li{
		width: 50%;
		float: left;
	}
</style>


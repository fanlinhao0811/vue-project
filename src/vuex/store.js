import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
	count:1,
	count1:1
}

const mutations = {
	add(state,num){
		state.count += num;
		state.count1 += num;
	},
	reduce(state){
		state.count--;
		state.count1--;
	}
}
export default new Vuex.Store({
	state,
	mutations
})
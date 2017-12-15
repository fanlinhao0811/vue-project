import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import ComponentA from '@/components/ComponentA'
import Top250 from '@/components/movie/Top250'
import Albums from '@/components/music/musicList'
import Player from '@/components/music/MusicPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			// component: ComponentA
			redirst:'/movie/top250'
    },{
      path: '/movie',
			component: Movie,
			children:[
				{path:'/movie/top250',component:Top250},
				{path:'/movie/hot',component:Top250},
				{path:'/movie/coming',component:Top250},
		]
    },{
      path: '/music',
			component: Music,
			redirect:'/music/music_albums',
			children:[
        {path:'/music/music_albums',component:Albums},
        {path:'/music/music_player/:id/:name',component:Player}
      ]
    },{
      path: '/book',
      component: Book
    },{
      path: '/photo',
			component: Photo,
			// childen:[
			// 	{path:'/photo/photoPic/index',component:data}
			// ]
    }
  ]
})

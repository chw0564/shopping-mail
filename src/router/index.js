import Vue from 'vue'
import Router from 'vue-router'

import Content from '@/components/Content/Content'
import Home from '@/components/Content/Home/Home'

import Detail from '@/components/Detail/Detail'
import SeachList from '@/components/Detail/SeachList/SeachList'



Vue.use(Router)

export default new Router({
	mode:"history",
	linkExactActiveClass:"active",
	routes: [
		// 默认路由
		{path:"/",redirect:"/content"},
		{path:"/content",component:Content,children:[
			{path:"",redirect:"home"},
			{path:"home",name:"home",component:Home}
		]},
		{path:"/detail",component:Detail,children:[
			{path:"seachList",name:"seachList",component:SeachList}			
		]}
	]
})

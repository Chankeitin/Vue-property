//配置家居服务嵌套路由

const homeServices= [
	{
		path: '/pages/homeServices/homeServices',
		name: 'homeServices',
		aliasPath:'/',
		children: [
			{
				path: 'homeServices/market',
				component:() =>import('../../components/homeServices/content/market/market.vue'),
				name: 'market'
			},
			{
				path: 'homeServices/group',
				component:() =>import('../../components/homeServices/content/group/group.vue'),
				name: 'group'
			},
			{
				path: 'homeServices/convenience',
				component:() =>import('../../components/homeServices/content/convenience/convenience.vue'),
				name: 'convenience'
			}
		]
	}
]

export default homeServices
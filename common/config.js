/**
 * Copyright (c) 2013-Now http://jeesite.com All rights reserved.
 */
const config = {

	// 产品名称
	productName: 'JeeSite Mobile',

	// 公司名称
	companyName: 'ThinkGem',

	// 产品版本号
	productVersion: 'V4.3.6',

	// 版本检查标识
	appCode: 'android',

	// 内部版本号码
	appVersion: 1,

	// 管理基础路径
	adminPath: '/a'

}

config.baseUrlList = [
	{
		name: 'https://vue.jeesite.com',
		baseUrl: 'https://vue.jeesite.com/js',
		value: '0'
	}, {
		name: 'http://192.168.0.13:8980',
		baseUrl: 'http://192.168.0.13:8980/js',
		value: '1'
	}, {
		name: 'http://127.0.0.1:8980',
		baseUrl: 'http://127.0.0.1:8980/js',
		value: '2'
	}
];

// 设置后台接口服务的基础地址
config.baseUrl = config.baseUrlList[0].baseUrl;

// 建议：打开下面注释，方便根据环境，自动设定服务地址
if (process.env.NODE_ENV === 'development') {
	// config.baseUrl = '/../js'; // 代理模式 vue.config.js 中找到 devServer 设置的地址
	// config.baseUrl = 'http://127.0.0.1:8980/js';
}

export default config;
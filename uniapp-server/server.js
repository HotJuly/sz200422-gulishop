const Koa = require('koa');
const KoaRouter = require('koa-router');
const Fly=require("flyio/src/node");
const jwt = require('jsonwebtoken');
const fly=new Fly;

//1.创建服务器应用实例
//express()->获取实例
const app = new Koa();

//3.注册路由
//3.1创建路由器实例
const router = new KoaRouter();

//3.2使用中间件
//中间件app.use(中间件函数)
app.use(router.routes())
    .use(router.allowedMethods());

//3.3注册后端路由
/*
express接收实参:
    1)req->请求报文对象
    2)res->响应报文对象->res.send(数据)
    3)next->执行下一个中间件函数
koa接收实参:
    1)ctx->req+res  ->  ctx.body=响应数据
    2)next->执行下一个中间件函数
*/
router.get('/test',(ctx,next)=>{
    ctx.body={
        username:"xiaoming"
    }
})

//用于返回首页推荐页面数据
const indexData = require('./datas/index.json');
router.get('/getIndexData',(ctx,next)=>{
    ctx.body=indexData
})

//用于返回首页分类页面数据
const indexCateList = require('./datas/indexCateList.json');
router.get('/getindexCateList',async (ctx,next)=>{
	await new Promise((resolve)=>{
		setTimeout(resolve,2000)
		// setTimeout(()=>{},2000)
	})
    ctx.body=indexCateList
})

//用于返回分类页面数据
const categoryDatas = require('./datas/categoryDatas.json');
router.get('/getCategoryDatas',(ctx,next)=>{
    ctx.body=categoryDatas
})

//用于返回对应商品数据
const goods = require('./datas/goods.json');
router.get('/getGoodDetail',(ctx,next)=>{
	//1.获取query传参过来的商品id
	// console.log(ctx.query)
		let {goodId} = ctx.query;
	//2.从goods数据中,找到对应的商品对象
	//find 找到符合条件的对象,返回值是第一个符合的对象  没找到,返回值是undefined
	//filter  找到->存储所有满足条件的对象的数组	没找到,返回值是空数组
		let good = goods.find((item,index)=>{
			//位运算符 >>> <<<
			return item.id===goodId*1
			// return item.id===goodId>>>0
		})
	//3.返回响应
		let body;
		if(good){
			body={
				code:200,
				data:good
			}
		}else{
			body={
				code:201,
				data:"查无此商品"
			}
		}
		ctx.body=body
})

//用于获取用户唯一标识OpenId
router.get('/getOpenId',async (ctx,next)=>{
	let {code} = ctx.query;
	console.log(code)
	let AppId="wxe5931a68ea66cece";
	let AppSecret = "1e045d3104b6514f4335ed6e555eb183";
	let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`
	let res = await fly.get(url);
	console.log(res.data)
	let {openid} = JSON.parse(res.data);
	console.log(openid)
	//jwt加密语法:jwt.sign(需要加密的数据,盐(salt,提高破译的难度))
	let salt = "atguigu";
	let token = jwt.sign(openid,salt);
	//jwt解密语法:jwt.verify(token,盐)
	let newOpenId = jwt.verify(token,salt);
	console.log(token)
	console.log(openid,newOpenId)
	ctx.body=token
})

//2.运行并监听服务器
app.listen(3002,(error)=>{
    if(error){
        console.log('启动服务器失败')
    }else{
        console.log('服务器启动成功,启动与http://localhost:3002上')
    }
})


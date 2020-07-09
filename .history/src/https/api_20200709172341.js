// 用来封装所有的请求
import service from './index'

export default {
    // 1 获取首页数据(get)
    home() {
        console.log(res.data)
        return service.get(`/goods/home`
        )
    },

    // 2 为你推荐(get)
    recommend() {
        // console.log(res.data)
        return service.get(`/goods/recommend`)
    },

    // 3 所有商品(get)
    // 1.page: 请求页数(必填)
    // 2.size: 请求条数(必填)
    // 3.sort: 排序方式 1为升序 -1为降序
    // 4.priceGt: 价格区间 从多少开始
    // 5.priceLte: 价格区间 到哪结束
    allGoods() {
        return service.get(`/goods/allGoods`)
    },

    // 4 搜索商品(get)
    // 参数:
    // keyword: 关键字
    search() {
        return service.get(`/goods/search`)
    },

    // 5 商品详情(get)
    // 参数:
    // productId: 商品id

    detail() {
        return service.get(`/goods/search`)
    },

    // 6 登陆(post)
    // 参数:
    // username: 用户名
    // password: 密码
    login({username, password}) {
        return service.post(`/users/login`, {
            username,
            password
        })
    },

    // 7 注册(post)
    // 参数:
    // username: 用户名
    // password: 密码
    register({username, password}) {
        return service.post('/users/register', {
            username,
            password,
        })
    },

    // 8 加入购物车(post)
    // 参数:
    // productId:商品的id
    addCart(productId) {
        return service.post('/goods/addCart', {
            productId,
        })
    },

    // 9 查询购物车(get)
    getCarts() {
        return service.get('/goods/getCart')
    },

    // 10 删除购物车的商品(get)
    // 参数:
    // productId: 商品_id
    delCart(productId) {
        return service.post('/goods/delCart', {
            productId
        })
    },

    // 11 修改购物车数量(post)
    // 参数:
    // 1.productId: 商品_id
    // 2.count: 数量
    editCart(productId, count) {
        return service.post('/goods/editCart', {
            productId,
            count
        })
    },



    // 12 获取全部收获地址(get)

    list() {
        return service.get('/address/list')
    },

    // 13 添加收获地址(post)
    // 参数:
    // 1.username: 用户名
    // 2.phone: 电话
    // 3.address: 地址
    // 4.isDefault: 是否为默认地址
    addAddress(username, phone, address, isDefault) {
        return service.post('/address/addAddress', {
            username,
            phone,
            address,
            isDefault
        })
    },

    // 14 设置默认地址(post)
    // 参数:
    // 1.addressId: 地址的_id
    setDefault(addressId) {
        return service.post('/address/setDefault', {
            addressId
        })
    },

    // 15 修改地址(post)
    // 参数:
    // 1.addressId: 地址的_id
    // 2.username: 用户名
    // 3.phone: 电话
    // 4.address: 地址
    // 5.isDefault: 是否为默认地址
    editAddress(addressId, username, phone, address, isDefault) {
        return service.post('/address/editAddress', {
            addressId,
            username,
            phone,
            address,
            isDefault,
        })
    },

    // 16 删除地址(post)
    // 参数:
    // addressId: 地址的_id
    deleteAddress() {
        return service.post('/address/deleteAddress', {
            addressId
        })
    },
}
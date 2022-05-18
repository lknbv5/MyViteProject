import request from './request'

//------------------------------------------------------------封装方式 一 对应request写法---------------------------------------------------------
////定义一个后端返回类型接口，与后台约定后定义
// interface responseData<T = any>{
//     status: number
//     msg:string
//     data:T
// }
////每个接口定义一个实现方法，默认写法
// export const getapiInfo=() => {
//    return request.get<responseData<{a:string}>>('/api/url').then(res=>{
//        return res.data
//        //返回后台json数据Data
//    })
// }
//------------------------------------------------------------封装方式 二 对应request写法 ---------------------------------------------------------
//定义接口单独模块化抽离
//type 显示声明apiData为类型(接口)，以免编辑成js时，被当做值处理
import type {apiData} from './type/apiData'

export const getapiinfo=()=>{
    return request<apiData>({
        method: 'GET',
        url: '/api/url',
        params: {

        }
    })
}



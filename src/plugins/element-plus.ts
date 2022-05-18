//以插件的形式使用ElementPlus
//之后在main.ts 进行插件引用

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {App} from 'vue'

export default {
    install(app:App){
        app.use(ElementPlus)
    }
}
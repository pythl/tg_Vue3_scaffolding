import vue from '@vitejs/plugin-vue'
import type { Plugin } from "vite";
import AutoImport from 'unplugin-auto-import/vite';
import autoRegisterAntdV from './antdv'
import autoRegisterElementPlus from './eleplus'

//插件集中管理,安装
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
    const plugins: Plugin[] = [vue()]
    // 1.注册antdv
    plugins.push(autoRegisterAntdV())
    // 2.自动注册Element-Plus
    // autoRegisterElementPlus().forEach(element => {
    //     plugins.push(element)
    // });
    // 3.自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    plugins.push(
        AutoImport({
            imports: ['vue', 'vue-router'],
            // 生成自动导入的TS声明文件
            dts: "../../auto-import.d.ts",
        })
    )
    return plugins
} 
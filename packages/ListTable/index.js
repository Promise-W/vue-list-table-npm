// 导入组件，组件必须声明 name
import Listable from './src'
// 为组件提供 install 安装方法，供按需引入
Listable.install = function (Vue) {
  Vue.component(Listable.name, Listable)
}
// 导出组件
export default Listable
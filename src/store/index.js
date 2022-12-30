//导入vue和vuex
import Vue from "vue";
import Vuex from "vuex";
//使用vuex

Vue.use(Vuex);

//创建vuex实例
const store = new Vuex.Store({
  //全局属性变量
  state: {
    //头部面包屑导航
    navMenuData: [],
    //入库记录信息
    putDetailPagemsg: "",
  },
  //全局方法,调用方法this.$store.commit('方法名',参数)
  mutations: {
    changeNavMenuData(state, params) {
      state.navMenuData = params;
    },
    changePutDetailPageMsg(state, params) {
      state.putDetailPageMsg = params;
    },
  },
  //全局异步方法,调用方法this.$store.dispatch('方法名',参数)
    actions: {},
    //Vuex的计算属性
    getters: {},
    //模块化
    modules: {},
});

//导出store
export default store;

<template>
  <div>
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="main-box" :class="{ 'content-collapse': collapse }">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import bus from './bus.js'
export default{
    components:{
        vHead,
        vSidebar
    },
    data(){
        return{
            collapse: false
        }
    },
    created(){
        bus.$on('collapse',msg=>{
            this.collapse = msg
        })
    }
}
</script>

<style lang="scss" scoped>
.main-box {
  position: absolute;
  top: 64px;
  left: 256px;
  right: 0;
  bottom: 0;
  background: #f0f2f5;
  &.content-collapse {
    left: 65px;
  }
}
</style>

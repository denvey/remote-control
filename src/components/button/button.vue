<template>
  <div class="btn-wrap">
    <div class="btn button-3d" @click="link(code)">
        <span class="iconfont" :class="icon"></span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { link } from '../../util/wx.js'

export default Vue.extend({
  name: 'Home',
  props: ['icon', 'code'],
  methods: {
    link(code) {
        console.log(code);
        if (code) {
            link(code);
        }
    }
  }
})
</script>

<style lang="less">
.btn-wrap {
    .btn {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .button-3d {
        color: #666;
        background-color: #EEE;
        border-color: #EEE;
        position: relative;
        top: 0;
        // background: linear-gradient(#EEE, #9ad824);
        box-shadow: 0 1px 0 #bbbbbb, 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    .button-3d:hover, .button-3d:focus {
        box-shadow: 0 1px 0 #bbbbbb, 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    .button-3d:active, .button-3d.active, .button-3d.is-active {
        top: 1px;
        transition-property: all;
        transition-duration: .15s;
        box-shadow: 0 1px 0 #bbbbbb, 0 1px 1px rgba(0, 0, 0, 0.2);
    }
}
</style>

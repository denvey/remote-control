<template>
  <div class="home-wrap">
    <div class="home-control">
      <div class="home-control-top">
        <Button icon="icon-guanji" code="26" />
        <span class="host">{{host}}</span>
        <Button icon="icon-ziyuan" @click.native="clickShow" />
      </div>
      <div class="home-control-center">
        <div class="sector">
          <div class="box s1" @click="link(19)"></div>
          <div class="box s2" @click="link(22)"></div>
          <div class="box s3" @click="link(20)"></div>
          <div class="box s4" @click="link(21)"></div>
          <div class="center" code="23" @click="link(23)">OK</div>
        </div>
      </div>
      <div class="home-control-bottom">
        <Button icon="icon-shouye" code="3" />
        <Button icon="icon-fanhui" code="4" />
        <Button icon="icon-caidan" code="82" />
      </div>
      <div class="home-control-volume">
        <div class="volume-wrap">
          <Button icon="icon-jia" code="24" />
          <Button icon="icon-jian" code="25" />
        </div>
      </div>
    </div>
    <div v-show="diaShow">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd">
          <div class="weui-dialog__title">填写盒子IP地址</div>
        </div>
        <div class="weui-dialog__bd">
           <input class="weui-input" v-model="host" @input="inputValue" type="digit" placeholder="例如 192.168.0.1" />
        </div>
        <div class="weui-dialog__ft">
          <div v-for="item in diaBtn" class="weui-dialog__btn weui-dialog__btn_primary" @click="item.click">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from '../components/button/button.vue'
import 'reduce-loader!./web'
import { link } from '../util/wx.js'

export default Vue.extend({
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      diaShow: false,
      host: '',
      diaBtn: [
        {
          text: '确定',
          click: (e) => {
            this.diaShow = false
            wx.setStorage({
              key:"host",
              data: this.host
            })
          }
        },
        {
          text: '取消',
          click: () => {
            this.diaShow = false
          }
        }
      ],
    }
  },
  created() {
    wx.getStorage({
      key: 'host',
      success:(res) => {
        if (res.data) {
          this.host = res.data
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  methods: {
    clickShow() {
      this.diaShow = true
    },
    inputValue(e) {
      const value = e.target.value
      this.host = value;
    },
    link(code) {
      if (code) {
        link(code);
      }
    }
  }
})
</script>

<style lang="less">
.home-wrap {
  height: 100vh;
}
.home-control {
  padding: 20px;
}
.home-control-top,
.home-control-bottom {
  display: flex;
  justify-content: space-between;
}
.host {
  color: #999
}
.home-control-center {
  padding: 7vh 0;
}
.home-control-volume {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 120px;
  padding-top: 3vh;
  align-items: center;
}
.volume-wrap {
  box-shadow: 0 1px 0 #bbbbbb, 0 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  background-color: #EEE;
  .button-3d {
    box-shadow: none;
  }
  .button-3d:hover, .button-3d:focus {
    box-shadow: none;
  }
  .button-3d:active, .button-3d.active, .button-3d.is-active {
    top: 0;
    box-shadow: none;
  }
}
.sector {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #eee;
}
.sector .box {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  clip: rect(0px, 99px, 99px, 0);
}
.sector .box,
.sector .center {
  transition: 0.5s;
  background: #eee;
}
.sector .box:active,
.sector .center:active {
  background: #777;
}
.sector .s1 {
  transform: rotate(45deg);
}
.sector .s2 {
  transform: rotate(135deg);
}
.sector .s3 {
  transform: rotate(-135deg);
}
.sector .s4 {
  transform: rotate(-45deg);
}
.sector .center {
  width: 90px;
  height: 90px;
  position: absolute;
  left: 54px;
  top: 54px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
}


.weui-mask {
    background: rgba(0, 0, 0, 0.6);
}

weui-actionsheet, .weui-mask, .weui-mask_transparent {
    left: 0;
    bottom: 0;
    position: fixed;
}
.weui-mask, .weui-mask_transparent {
    right: 0;
    z-index: 1000;
    top: 0;
}

.weui-dialog {
    top: 50%;
    left: 16px;
    right: 16px;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    background-color: #FFF;
    text-align: center;
    border-radius: 12px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-height: 90%;
}

.weui-dialog, .weui-dialog__bd:first-child {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
}

.weui-dialog, .weui-toast {
    position: fixed;
    z-index: 5000;
}
.weui-dialog__hd {
    padding: 32px 24px 16px;
}
.weui-dialog__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.4;
}
.weui-dialog__bd {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 24px;
    margin-bottom: 32px;
    font-size: 17px;
    line-height: 1.4;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: rgba(0, 0, 0, 0.5);
}
.weui-dialog__ft {
    position: relative;
    line-height: 56px;
    min-height: 56px;
    font-size: 17px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
weui-dialog__btn {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #576B95;
    font-weight: 700;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
}

.weui-input, .weui-textarea {
    border: 0;
    width: 100%;
    color: inherit;
    outline: 0;
}
.weui-input {
    background-color: transparent;
    font-size: inherit;
    height: 1.41176471em;
    line-height: 1.41176471;
}
.weui-dialog__btn {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #576B95;
    font-weight: 700;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
}
.weui-dialog__btn:after {
    position: absolute;
    top: 0;
    width: 1px;
    bottom: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
}
.weui-dialog__ft:after {
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    color: rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.weui-dialog__btn:after, .weui-dialog__ft:after {
    content: " ";
    left: 0;
}
weui-actionsheet__cell:before, .weui-dialog__ft:after, .weui-loadmore_line, .weui-picker__indicator:before {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

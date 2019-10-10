<template>
  <div class="wrapper">
    <topBar class="topbar" />
    <div class="content">
      <leftMenu />
      <router-view v-if="isValidPath" class="center"/>
      <div v-else class="center">
        <div class="block">
          <!-- :height="bannerHeight + 'px'" -->
          <el-carousel :autoplay="false" trigger="click" height="300px">
            <el-carousel-item v-for="item in imageBox" :key="item.id">
              <img :src="item.idView" :alt="item.text" class="image"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          kkkkk
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageBox: [
        {
          id: 0,
          text: "波妞",
          idView: require("./images/timg.jpg")
        },
        {
          id: 1,
          text: "第二张",
          idView: require("./images/2.png")
        },
        {
          id: 2,
          text: "第三张",
          idView: require("./images/3.png")
        },
        {
          id: 3,
          text: "第四张",
          idView: require("./images/4.jpg")
        }
      ],
      //  // 图片父容器高度
      // bannerHeight :400,
      // maxbannerHeight: 400,
      // // 浏览器宽度
      // screenWidth :0,
    }
  },
  components: {
    'topBar': () => import('./components/topBar'),
    'leftMenu': () => import('./components/leftMenu')
  },
  computed: {
    isValidPath () {
      const res = this.$route.path.match(/\/(?!$)/g)
      return Array.isArray(res) && res.length >= 1
    }
  },
  // methods:{
  //   setSize:function () {
  //     // 通过浏览器宽度(图片宽度)计算高度
  //     this.bannerHeight = 400 / 1920 * this.screenWidth
  //     if(this.bannerHeight > this.maxbannerHeight){
  //       this.bannerHeight = this.maxbannerHeight
  //     }
  //   },
  // },
  // mounted() {
  //     // 首次加载时,需要调用一次
  //     this.screenWidth =  window.innerWidth;
  //     this.setSize();
  //     // 窗口大小发生改变时,调用一次
  //     window.onresize = () =>{
  //     this.screenWidth =  window.innerWidth;
  //     this.setSize();
  //   }
  // }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
}

.content {
  flex: 1;
  width: 80%;
  height: 100vh;
  overflow: auto;
  margin-top: 70px;

  .block {
    width: 70%;
    float: left;

    .image {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 20%;
    border: 1px solid #000;
    float: right;
    height: 320px;
  }
}

.center {
  margin-left: 200px;
}
</style>
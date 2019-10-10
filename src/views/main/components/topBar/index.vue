<script>
import menuList from 'router/routes'

export default {
  data () {
    return {
      menuList: menuList[0].children,
      activeIndex: this.$route.path
    }
  },

  methods: {
    renderMenuItem (routerArr) {
      return routerArr.map((routeObj) => {
        const index = routeObj.path
        const title = routeObj.meta.title
        if (routeObj.children) {
          return <el-submenu index={index}>
            <template slot="title">{title}</template>
            {this.renderMenuItem(routeObj.children)}
          </el-submenu>
        } else {
          return <el-menu-item index={index} route={routeObj}>{title}</el-menu-item>
        }
      })
    }
  },

  render () {
    const { menuList, activeIndex, renderMenuItem } = this
    return <div class="menu">
      <el-menu defaultActive={activeIndex} mode="horizontal" router={true} class="el-menu">
        {renderMenuItem(menuList)}
      </el-menu>
    </div>
  }
}
</script>

<style lang="less" scoped>
.menu {
  position: absolute;
  width: 100%;
  height: 70px;
  
}

.el-menu {
  width: 80%;
}

</style>


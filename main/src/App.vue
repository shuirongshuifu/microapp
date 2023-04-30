<template>
  <div id="app">
    <!-- 左侧路由导航 -->
    <div class="leftRoute">
      <div
        class="routeItem"
        :class="{ highlighC: index == highligh }"
        v-for="(item, index) in routeArr"
        :key="index"
        @click="jumpRoute(item.path, index)"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- 右侧内容区 -->
    <div class="rightContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const enmuDict = {
  child1: 1,
  child2: 2,
  child3: 3,
};
export default {
  name: "",
  data() {
    return {
      routeArr: [
        {
          name: "主应用",
          path: "/",
        },
        {
          name: "子应用1",
          path: "/child1",
        },
        {
          name: "子应用2",
          path: "/child2",
        },
        {
          name: "子应用3",
          path: "/child3",
        },
      ],
      highligh: 0, // highlight为0表示首页选项卡
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        this.highligh = 0;
      } else {
        this.highligh = enmuDict[to.name];
      }
    },
  },
  methods: {
    jumpRoute(path, index) {
      this.highligh = index;
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 6px;
  .leftRoute {
    width: 60px;
    height: 100%;
    .routeItem {
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #999;
      font-size: 14px;
      font-family: "楷体";
      cursor: pointer;
      margin-bottom: 6px;
      border-radius: 6px;
      user-select: none;
    }
    .routeItem:first-child {
      font-weight: 700;
    }
    .routeItem:hover {
      background-color: #e9e9e9;
    }
    .highlighC {
      background-color: #e9e9e9;
      border-width: 2px;
    }
  }
  .rightContent {
    // flex: 1;
    width: calc(100% - 60px);
    margin-left: 6px;
    box-sizing: border-box;
    border: 4px dotted #e9e9e9;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 3px;
    overflow: hidden;
    // 给基础加点高度
    micro-app {
      height: 100%;
    }
  }
}
</style>

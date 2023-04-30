<template>
  <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
  <!-- url="http://localhost:7778" -->
  <micro-app
    name="child1"
    url="http://ashuai.work:7778"
    baseroute="/child1"
    :data="dataForChild"
  ></micro-app>
  <!-- child1为权限子项目 -->
</template>

<script>
export default {
  data() {
    return {
      dataForChild: { token: "i am a token for auth" },
    };
  },
};
</script>
<template>
  <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
    -->
  <!-- url="http://localhost:7779/" -->
  <micro-app
    name="child2"
    url="http://ashuai.work:7779/"
    baseroute="/child2"
    keep-alive
  ></micro-app>
</template>

<!-- child2为ele子应用项目 -->



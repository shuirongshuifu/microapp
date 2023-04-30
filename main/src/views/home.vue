<template>
  <div class="welcomeMricoApp">
    <h3>Welcome to the Micro front end 🧐🧐🧐</h3>
    <br />
    <div class="line">
      <p>- 用微前端或iframe进行项目的集成</p>
      <p>- 可单独访问子应用项目</p>
      <p>- 也可通过主应用基座进行访问</p>
      <p>- 即为将多个子应用项目集成到一个主应用里面</p>
      <p>- 如点击左侧子应用导航栏在主应用基座内进行子应用访问</p>
    </div>
    <br />
    <button
      v-for="(item, index) in childProjects"
      :key="index"
      @click="jump(item.childUrl)"
      class="childC"
    >
      {{ item.childName }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childProjects: [
        {
          childName: "权限项目-单独访问",
          childUrl: "http://ashuai.work:7778",
        },
        {
          childName: "ele项目-单独访问",
          childUrl: "http://ashuai.work:7779",
        },
        {
          childName: "blog项目-单独访问",
          childUrl: "http://ashuai.work:8890",
        },
      ],
    };
  },
  methods: {
    jump(url) {
      window.open(url);
    },
  },
};
</script>

<style>
.welcomeMricoApp {
  text-align: center;
}
h3 {
  text-align: center;
  margin-top: 24px;
}
.line {
  text-align: left;
  margin-left: 50%;
  transform: translateX(-50%);
}
.childC {
  margin-right: 12px;
}
button {
  padding: 4px 8px;
  cursor: pointer;
}
</style>
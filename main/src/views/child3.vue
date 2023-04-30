<template>
  <div class="ifm">
    <h3>微前端子应用之iframe方式集成(如蓝湖)</h3>
    <iframe src="http://ashuai.work:8890/" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ifm {
  width: 100%;
  height: 100%;
  position: relative;
}
h3 {
  position: absolute;
  top: 0;
  right: 0;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
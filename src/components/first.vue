<template>
  <div>
    <ul class="cmd">
      <li @click="html">html练习</li>
      <li @click="css">css练习</li>
      <li @click="test">test练习</li>
      <li @click="bro">2b青年</li>
      <li @click='shopping'>千里之行</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    html() {
      this.$router.push({ path: "/html" });
    },
    css() {
      this.$router.push({ path: "/css" });
    },
    test() {
      this.$router.push({ path: "/test" });
    },
    bro() {
      this.$router.push({ path: "/bro" });
    },
    shopping() {
      this.$router.push({ path: "/shopping" });
    }
  }
};
</script>
<style>
.cmd{
  margin-left:300px}
</style>

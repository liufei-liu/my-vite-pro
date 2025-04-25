<template>
  <div class="sec-title">
    <h4>{{ title }}</h4>
    <i class="sec-circle sec-circle01"></i>
    <i class="sec-circle sec-circle02"></i>
    <i class="sec-circle sec-circle03"></i>
    <i class="sec-circle sec-circle04"></i>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
    required: true,
  },
  // showDot: {
  //     type: Boolean,
  //     default: false
  // },
  // iconShow: {
  //     type: Boolean,
  //     default: false
  // },
});
</script>
<style lang="scss" scoped>
.sec-title {
  position: relative;
  width: 90px;
  height: 22px;
  color: #757575;
  cursor: pointer;
  h4 {
    position: relative;
    font-size: 20px;
    font-family: "碳化硅大黑体";
    z-index: 10;
  }
}
.sec-circle {
  position: absolute;
  width: 14px;
  height: 14px;
  bottom: -4px;
  background: #ddf7f5;
  border-radius: 50%;
  z-index: 9;
}
.sec-circle01 {
  left: 8px;
}
.sec-circle02 {
  left: 28px;
}
.sec-circle03 {
  left: 48px;
}
.sec-circle04 {
  left: 70px;
}
</style>
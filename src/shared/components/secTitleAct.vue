<template>
  <div class="sec-title">
    <h4>{{ title }}</h4>
    <i class="sec-circle sec-circle01"></i>
    <i class="sec-circle sec-circle02"></i>
    <i class="sec-circle sec-circle03"></i>
    <i class="sec-circle sec-circle04"></i>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
    required: true,
  },
});
</script>>


<style lang="scss" scoped>
.sec-title {
  position: relative;
  width: 110px;
  height: 30px;
  cursor: pointer;
  h4 {
    position: relative;
    font-family: "碳化硅大黑体";
    font-size: 26px;
    color: #21aea2;
    z-index: 10;
  }
}
.sec-circle {
  position: absolute;
  bottom: -4px;
  width: 20px;
  height: 20px;
  background: #ddf7f5;
  border-radius: 50%;
  z-index: 9;
}
.sec-circle01 {
  left: 10px;
}
.sec-circle02 {
  left: 35px;
}
.sec-circle03 {
  left: 60px;
}
.sec-circle04 {
  left: 85px;
}
</style>
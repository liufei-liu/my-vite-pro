<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="index">首页</el-menu-item>
    <el-menu-item index="combo">套餐管理</el-menu-item>
    <el-menu-item index="member">会员管理</el-menu-item>
    <el-menu-item index="physicalTherapist">理疗师管理</el-menu-item>
    <el-menu-item index="disease">健康管理</el-menu-item>
    <el-menu-item index="statement">流水</el-menu-item>
    <el-menu-item index="equipment">设备管理</el-menu-item>
  </el-menu>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";

// 从 localStorage 读取初始值
const activeIndex = ref(localStorage.getItem("activeMenu") || "index");

// 监听变化存储到 localStorage
watch(activeIndex, (newVal) => {
  localStorage.setItem("activeMenu", newVal);
});

onMounted(() => {
  // 页面刷新时同步状态
  if (localStorage.getItem("activeMenu")) {
    activeIndex.value = localStorage.getItem("activeMenu")!;
  }
});
const router = useRouter();
// const activeIndex2 = ref("1");
const handleSelect = (key: string) => {
  localStorage.setItem("activeMenu", key);
  console.log(key);
  router.push(key);
};
</script>


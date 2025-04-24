<template>
  <div class="home">
    <img class="title-img" src="../assets/img/logo.png" alt="" />
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#21AEA2"
      text-color="#fff"
      active-text-color="#21AEA2"
    >
      <el-menu-item v-for="item in menuList" :index="item.route" :key="item.id"
        ><el-icon
          ><img
            v-if="activeIndex == item.route"
            class="icon-img"
            :src="item.srcActive"
            alt=""
          />
          <img v-else :src="item.src" alt="" /> </el-icon
        >{{ item.label }}</el-menu-item
      >
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
let menuList = [
  {
    id: "1",
    label: "首页",
    route: "index",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_index_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_index_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "2",
    label: "套餐管理",
    route: "combo",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_package_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_package_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "3",
    label: "会员管理",
    route: "member",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_member_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_member_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "4",
    label: "理疗师管理",
    route: "physicalTherapist",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_staff_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_staff_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "5",
    label: "健康管理",
    route: "disease",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_sickness_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_sickness_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "6",
    label: "流水",
    route: "statement",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_account_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_account_nor.png",
      import.meta.url
    ).href,
  },
  {
    id: "7",
    label: "设备管理",
    route: "equipment",
    srcActive: new URL(
      "@/assets/img/home/menu_btn_icon_equipment_hot.png",
      import.meta.url
    ).href,
    src: new URL(
      "@/assets/img/home/menu_btn_icon_equipment_nor.png",
      import.meta.url
    ).href,
  },
];

// 从 localStorage 读取初始值
const activeIndex = ref(localStorage.getItem("activeMenu") || "index");

// //监听变化存储到 localStorage
watch(activeIndex, (newVal) => {
  localStorage.setItem("activeMenu", newVal);
});

onMounted(() => {
  // 页面刷新时同步状态
  if (localStorage.getItem("activeMenu")) {
    activeIndex.value = localStorage.getItem("activeMenu")!;
    console.log(activeIndex);
  }
});
const router = useRouter();
// const activeIndex2 = ref("1");
const handleSelect = (key: string) => {
  localStorage.setItem("activeMenu", key);
  activeIndex.value = localStorage.getItem("activeMenu")!;
  console.log(key);
  router.push(key);
};
</script>
<style scoped>
h3 {
  margin: 20px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.home {
  position: relative;
  height: 100%;
}
.title-img {
  background: #21aea2;
  position: absolute;
  left: 30px;
  top: 5px;
  z-index: 999;
}
.el-menu-demo {
  background: #21aea2;
  height: 80px;
}
.home:deep(.el-menu--horizontal) {
  justify-content: flex-start;
  padding-left: 300px;
  font-size: 30px;
  height: 80px;
  align-items: center;
}

.home:deep(.el-menu-item:hover) {
  border-bottom: none;
  background-color: rgb(26, 139, 130);
  color: #fff;
}
/* .home:deep(.el-menu-item:focus) {
  background-color: #fff;
  color: #21aea2;
  height: 50px;
  border-bottom: none;
  border-radius: 10px;
} */
.home:deep(.el-menu--horizontal > .el-menu-item) {
  font-size: 18px;
  /* margin-left: 10px; */
  padding: 0 40px;
}
.home .icon-img {
  width: 20px;
  height: 20px;
}
.home:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  background-color: #fff;
  color: #21aea2;
  height: 50px;
  /* padding: 0 40px; */
  border-bottom: none;
  border-radius: 10px;
}
</style>


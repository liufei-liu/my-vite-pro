<template>
  <div class="index">
    <div class="left">
      <div class="title">
        <secTitleAct class="tab-one" title="选择套餐" />
      </div>
      <div class="left-content">
        <div>
          <div class="item-title">基本套餐</div>
          <div class="comboItem">
            <span class="discount">会员1.0扣</span>
            <div class="bg-img bg-div">
              <div>
                <header>适用人群</header>
                <p>sdadawdawd</p>
              </div>
            </div>
            <!-- <img class="bg-img" src="" /> -->
            <div class="text-box">
              <div class="name">超声波燃脂</div>
              <!-- 活动价格 -->
              <span class="money">￥299</span>
              <!-- 会员价格 -->
              <!-- <span class="money">￥399</span> -->
              <!-- 原价 -->
              <span class="Nop-money">￥79</span>
              <span class="op-money">￥33</span>
              <span class="time">20min</span>
              <el-popover
                title="适应征状"
                content="弹窗内容"
                placement="top-start"
              >
                <template #reference>
                  <div class="description">top-start</div>
                </template>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' >
import secTitleNor from "@/shared/components/secTitleAct.vue";
import secTitleAct from "@/shared/components/secTitleAct.vue";
import config from '/public/indexConfig.json'
let list=config.list
console.log(list)
// const getList = (prams:any) => {
//   list=window.indexConfig.list;
// };
</script>

<style lang="scss" scoped>
.index {
  display: flex;
}
.title {
  font-size: 25px;
  margin-left: -10px;
  margin-top: 20px;
  margin-bottom: 6px;
}
.left-content {
  width: 980px;
  /* height: 800px; */
  min-height: 800px;
  border: 1px solid #bcebe6;
  border-radius: 2%;
  padding: 0px 20px 20px 0px;
  background-color: #fff;
  overflow-y: scroll;
  min-height: 800px;
  margin-right: 40px;
}
.item-title {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
}
.comboItem {
  position: relative;
  display: inline-block;
  width: 220px;
  height: 240px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 8px;
  // border: 1px solid #21aea2;
}
.comboItem-bor {
  border-radius: 8px;
  border: 1px solid #21aea2;
  overflow: hidden;
}
.comboItem img {
  position: absolute;
  width: 220px;
  height: 150px;
}
.bg-img {
  width: 100%;
}
/* 打折小标签样式 */
.discount {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80px;
  height: 22px;
  background: #ff8000;
  border-radius: 0px 8px 0px 8px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  z-index: 2;
}
.text-box {
  position: absolute;
  bottom: 5px;
}
.bg-img {
  width: 100%;
}
.bg-div {
  border: 2px solid #ff6f1c;
  width: 220px;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.bg-div header {
  font-size: 13px;
  color: #ff6f1c;
  margin-bottom: 7px;
}
.name {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 16px;
}

.money {
  color: #ff0000;
  font-size: 20px;
  margin-left: 5px;
}
.op-money {
  margin-left: 5px;
  font-size: 14px;
  color: #7b7b7b;
  text-decoration: line-through gray 1px;
}
.Nop-money {
  margin-left: 5px;
  font-size: 14px;
  color: #7b7b7b;
  /* text-decoration: line-through gray 1px; */
}
/* 左侧隐藏滚动条 */
.left-content::-webkit-scrollbar {
  width: 0 !important;
}
.left-content {
  -ms-overflow-style: none;
}

.left-content {
  overflow: -moz-scrollbars-none;
}
.op-money {
  margin-left: 5px;
  font-size: 14px;
  color: #7b7b7b;
  text-decoration: line-through gray 1px;
}
.time {
  font-size: 14px;
  color: #7b7b7b;
  vertical-align: bottom;
  margin-left: 22px;
}
.description {
  height: 30px;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 12px;
  color: #8e8e8e;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 60px;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>>

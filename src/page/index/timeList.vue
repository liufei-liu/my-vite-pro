<template>
<div class="index">
    <div class="message-box" v-if="activeAlert">
      <div class="message-title">设备信息</div>
      <div class="message-text">
        当前设备需运行时间分，时间不够
      </div>
      <div class="message-btn">
        <div
          class="message"
          
        >
          确认
        </div>
      </div>
    </div>

    <el-dialog :close-on-click-modal="false" v-model="dialogFormVisible" >
        <div class="time-box">
            <header>预约设备/时间</header>
            <div class="name-box">
                <el-radio-group v-model="radioName" size="large">
              <el-radio-button
                :label="item"
                v-for="(item, index) in nameList"
                :key="index"
              >
                {{ item }}
              </el-radio-button>
            </el-radio-group>
            </div>
            <div>
                <el-tabs  type="border-card" class="demo-tabs"  v-model="activeTab">
                <el-tab-pane v-for="(item, idx) in timeList"
                :key="idx"
                :label="item.equipment"
                :name="'tab' + idx">
                <div class="time-list" @mouseout="clearActive">

                  <div class="time-tile">上午</div>
                  <div class="time-style">
                    <template
                      v-for="(sub, index) in item.timeList"
                      :key="index"
                    >
                      <div v-if="index < 24">
                        <!-- @mouseover="showName(index)" -->
                        <span
                          class="green"
                          v-if="sub.type == 1 && activeName != index"
                        >
                          {{ sub.time }}
                        </span>
                        <span
                          :class="selectTime == index ? 'red' : 'nomor'"
                          @click="getTime(sub.time, sub.timeIndex, idx)"
                          v-if="sub.type == 0 && activeName != index"
                        >
                          {{ sub.time }}
                        </span>

                        <span class="show-name" v-if="activeName == index">
                          {{ sub.name }}
                        </span>
                      </div>
                    </template>
                  </div>

                  <div class="time-tile">下午</div>
                  <div class="time-style">
                    <template
                      v-for="(sub, index) in item.timeList"
                      :key="index"
                    >
                      <div v-if="index >= 24">
                        <!-- @mouseover="showName(index, 'AM')" -->
                        <span
                          class="green"
                          v-if="sub.type == 1 && activeName != index"
                        >
                          {{ sub.time }}
                        </span>
                        <span
                          :class="selectTime == index ? 'red' : 'nomor'"
                          @click="getTime(sub.time, sub.timeIndex, idx)"
                          v-if="sub.type == 0 && activeName != index"
                        >
                          {{ sub.time }}
                        </span>

                        <span class="show-name" v-if="activeName == index">
                          {{ sub.name }}
                        </span>
                      </div>
                    </template>
                  </div>
                </div>
                
                </el-tab-pane>
                
            </el-tabs>
            </div>
          <div class="bottom-btn">
          <div class="cancel" @click="clickTap">取消</div>
          <div class="submit" @click="submotOrder">确认预约</div>
        </div>
        </div>
   
  </el-dialog>
</div>
</template>
<script setup lang='ts' >
import { ref } from "vue";
import config from '/public/indexConfig.json'
const dialogFormVisible =ref(true);
const activeAlert=0;
const radioName=ref('');
const nameList = ref()
const activeName=ref(99);
const selectTime = ref();
const activeTab = ref('tab0');
nameList.value=config.therapistArr

let timeList = config.timeList as Array<{
  equipment: string;
  timeList: Array<any>;
}>;


const clearActive=()=>{

}
const getTime=(time:any,timeIndex:any,idx:number)=>{

}
const clickTap=()=>{

}
const submotOrder=()=>{

}
</script>
<style  scoped>

/* 时间被预定弹窗 */
.message-box {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 480px;
  height: 300px;
  margin-left: -240px;
  margin-top: -150px;
  background: #ffffff;
  box-shadow: 0px 5px 12px 1px #21605a;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
  border: 1px solid #21aea2;
  z-index: 999999;
  padding: 50px;
  box-sizing: border-box;
}
.message-title {
  font-size: 40px;
  font-weight: 500;
  color: #05645c;
  margin-bottom: 38px;
  text-align: center;
}
.message-text {
  text-align: center;
}
.message-btn {
  display: flex;
  justify-content: space-around;
}
.message {
  width: 200px;
  height: 30px;
  border-radius: 30px 30px 30px 30px;
  border: 1px solid #707070;
  text-align: center;
  line-height: 30px;
  color: #555555;
  font-size: 16px;
  margin-top: 50px;
}
header {
  font-size: 40px;
  font-weight: 500;
  color: #05645c;
  margin-bottom: 38px;
}

.time-box :deep(.el-tabs__item) {
  width: 240px;
  height: 50px;
  border-radius: 30px 30px 30px 30px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  margin-right: 40px;
  background-color: #ececec;
  border: none;
  color: #878787;
  padding: 0px !important;
}

.time-box :deep(.el-tabs__item.is-active) {
  background-color: #e2fffc;
  border: 1px solid #2ab1a6;
  color: #21aea2;
}
.time-box :deep(.el-tabs__nav-wrap::after) {
  background: transparent;
}
.time-box :deep(.el-tabs__active-bar) {
  display: none;
}
/* 单选按钮选中样式 */
.time-box
  :deep(.el-radio-button__original-radio:checked)
  + .el-radio-button__inner {
  background-color: #e2fffc;
  border: 1px solid #2ab1a6;
  color: #21aea2;
}
.el-tabs--border-card{
  border: none;
}
.time-box :deep(.el-tabs--border-card>.el-tabs__header){
  background: none !important;
  border-bottom: none;
  height: 50px;
}
/* 单选按钮默认样式 */
.time-box :deep(.el-radio-button--large .el-radio-button__inner) {
  margin-right: 20px;
  height: 60px;
  /* width: 300px; */
  border-radius: 30px 30px 30px 30px;
  background-color: #ececec;
  border: none;
  color: #878787;
  margin-bottom: 15px;
  line-height: 35px;
  font-size: 16px;
}
.name-box :deep(.el-radio-button--large .el-radio-button__inner) {
  /* width: 140px; */
  /* padding: 10 10px; */
  height: 50px;
  text-align: center;
  line-height: 26px;
}
.time-list {
  width: 880px;
  height: 260px;
  background: #ebf8f6;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  border: 1px solid #b0dfda;
  padding: 20px 20px 20px 20px;

  box-sizing: border-box;
}
.time-tile {
  font-size: 18px;
  color: #21aea2;
  margin-bottom: 10px;
}

.time-style {
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
  clear: both;
  /* justify-content: flex-start; */
  justify-content: space-around;
}
.time-style span {
  cursor: pointer;
  display: inline-block;
  flex: 0 0 25%;
  width: 65px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  /* margin-left: 20px; */
}
.green {
  color: #21aea2;
  cursor: not-allowed !important;
}

.bottom-btn {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.bottom-btn div {
  width: 240px;
  height: 50px;
  border-radius: 30px 30px 30px 30px;
  border: 1px solid #707070;
  text-align: center;
  line-height: 50px;
  color: #555555;
  font-size: 18px;
  cursor: pointer;
}
.bottom-btn-box div {
  width: 140px;
  height: 40px;
  line-height: 40px;
}
.submit {
  background: #21aea2;
  font-size: 18px;
  color: #ffffff !important;
  border: none !important;
  cursor: pointer;
}
</style>
<template>
  <div class="index">
  <!-- 左侧布局 -->
    <div class="left">
      <div class="title">
        <secTitleAct class="tab-one" title="选择套餐" />
      </div>
      <div class="left-content" >
        <div v-for="(item,idx) in list" :key="idx">
          <div class="item-title">{{item.name}}</div>
          <div class="comboItem" v-for="(sub,index) in item.list" :key="idx"   @click="selectOption(sub, index, idx)" :class="activityId==sub.id?'':'comboItem-bor'">
            <span class="discount">会员{{ ((sub.member_price / sub.normal_price) * 10).toFixed(1)}}折</span>
            <div class="bg-img bg-div" v-if="activityId==sub.id">
              <div>
                <header>适用人群</header>
                <p>{{sub.marks}}</p>
              </div>
            </div>
            <img v-else class="bg-img" :src="picGlo" /> 
            <div class="text-box">
              <div class="name">超声波燃脂</div>
              <!-- 活动价格 -->
              <span class="money" v-if="sub.activity">￥{{sub.sale_price}}</span>
             <!-- 会员价 -->
              <span class="money">￥{{sub.member_price }}</span>
              <!-- 原价 -->
              <span class="Nop-money"  v-if="sub.activity">￥{{ sub.normal_price }}</span>
              <span class="op-money" v-else>￥{{ sub.normal_price }}</span>
              <span class="time">{{ sub.time }}min</span>
              <el-popover
                title="适应征状"
                 :width="200"
              :content="sub.description"
                placement="top-start"
              >
                <template #reference>
                  <div class="description">{{ sub.description }}</div>
                </template>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧布局 -->
     <div class="right">
      <div class="right-title">
        <secTitleNor v-if="activeNum==2" class="tab-one"  @click="changeTitle(1)" title="游客下单"></secTitleNor>
        <secTitleAct v-else class="tab-one"  @click="changeTitle(1)" title="游客下单"></secTitleAct>
        <secTitleNor v-if="activeNum==1" class="tab-two"  @click="changeTitle(2)" title="会员下单"></secTitleNor>
        <secTitleAct v-else class="tab-two"  @click="changeTitle(2)" title="会员下单"></secTitleAct>
      </div>
      <div class="right-content">
        <div class="member-box" v-if="activeNum != 1">
          <div class="member-login">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item>
                <el-input
                  clearable
                  v-model="phone"
                  placeholder="请输入手机号"
                  @keyup.enter.native="selectInfo()"
                />
              </el-form-item>
              <!-- @keyup.enter.native -->
              <span class="selectBtn" @click="selectInfo()">查询</span>
            </el-form>
           
            <div>
              <div class="basic" v-if="memberInfo.gender&&memberInfo.name&&memberInfo.age>0&&memberInfo.phone_number">
                <img
                  v-if="memberInfo.gender == '女'"
                  src="../../assets/img/home/index_pic_famale.png"
                  
                />
                <img
                  v-if="memberInfo.gender == '男'"
                  src="../../assets/img/home/index_pic_man.png"
                  
                />
                <div class="basic-right">
                  <div class="basic-name">{{ memberInfo.name }}</div>
                  <span>{{ memberInfo.age }}岁</span>
                  <span class="basic-phone">{{ memberInfo.phone_number }}</span>
                </div>
              </div>
              
              <div v-else  class="no-data">输入号码查询会员信息</div>
            </div>
          
          </div>
        </div>
        <div class="tourist-box" v-if="activeNum == 1">
          <div class="tourist-title">您的性别是</div>
          <div class="gender-box">
            <div class="gender-check left" @click="selectman(1)">
              <img
                v-if="genderActive == 1"
                src="../../assets/img/home/index_btn_man_hot.png"
                
              />
              <img
                v-else
                src="../../assets/img/home/index_btn_man_nor.png"
                
              />
            </div>
            <div class="gender-check" @click="selectman(2)">
              <img
                v-if="genderActive == 2"
                src="../../assets/img/home/index_btn_famale_hot.png"
                
              />
              <img
                v-else
                src="../../assets/img/home/index_btn_famale_nor.png"
                
              />
            </div>
          </div>
          <div class="tourist-title">您的年龄是</div>
          <div class="radio-item">
            <el-radio-group v-model="radioAge" size="large">
              <el-radio-button
                :label="item.age"
                v-for="item in ageList"
                :value="item.age"
                :key="item.id"
              />
            </el-radio-group>
          </div>
          <div class="tourist-title">您是否有以下情况</div>
          <div class="check-item">
            <el-checkbox-group
              v-model="checkIllnessTag"
              size="large"
              @change="checkbox"
            >
              <el-checkbox-button
                v-for="item in illnessTag"
                :key="item"
                :value="item"
                
                >{{ item }}</el-checkbox-button
              >
            </el-checkbox-group>
          </div>

          <div @click="placeOrder('tourist')" class="submit-order">
            确认下单
          </div>
        </div>

      </div>
     </div>
     <time-list>
      
     </time-list>
  </div>
</template>

<script setup lang='ts' >
import { ref,getCurrentInstance,ComponentInternalInstance } from "vue";
import secTitleNor from "@/shared/components/secTitleNot.vue";
import secTitleAct from "@/shared/components/secTitleAct.vue";
import config from '/public/indexConfig.json'
import picGlo from "@/assets/img/1.png";
import timeList from "./timeList.vue";
const currentInstance = getCurrentInstance()! as ComponentInternalInstance;
const { proxy } = currentInstance;
let list=config.list
let activityId=ref(-1);
let activeNum=ref(1);
let phone=ref();
let genderActive=ref(1)
let padkageData = ref({}); //套餐数据
let radioAge=ref("")
let checkIllnessTag=ref([]);
let illnessTag=config.illArr
let ageList = [
    {
      age: "18岁以下",
      id: 1,
    },
    {
      age: "18-23岁",
      id: 2,
    },
    {
      age: "24-30岁",
      id: 3,
    },
    {
      age: "31-35岁",
      id: 4,
    },
    {
      age: "36-40岁",
      id: 5,
    },
    {
      age: "41-45岁",
      id: 6,
    },
    {
      age: "45-50岁",
      id: 7,
    },
    {
      age: "51-55岁",
      id: 8,
    },
    {
      age: "56-65岁",
      id: 9,
    },
    {
      age: "65岁以上",
      id: 10,
    },
  ]
interface Member {
  gender: string
  age: number
  name: string
  phone_number:any

}
let memberInfo=ref<Member>({
  gender: '',
  age: 0,
  name: '',
  phone_number:''
});


const selectOption=(val:any, idx:number, index:number)=>{

let {
    equipment,
    name,
    time,
    id,
    activity,
    sale_price,
    member_price,
    normal_price,
  } = val; 

  activityId.value=val.id
  padkageData.value={
    equipment: equipment,
    plan: name,
    time: time,
    id: id,
    sale_price: sale_price,
    member_price: member_price,
    normal_price: normal_price,
    activity: activity,
    plan_time: time,
  }
}

const changeTitle=(num:number)=>{
  activeNum.value=num
  activityId.value=-1
}
const selectInfo=()=>{
memberInfo.value=config.member;
console.log(memberInfo.value)
}

const selectman=(num:number)=>{
  genderActive.value=num
}

const checkbox=()=>{

}

const placeOrder=(str:string)=>{
  if (radioAge.value == "" && activeNum.value == 1) {
    proxy?.$msg.error("请选择年龄");
    return;
  }

  if (JSON.stringify(padkageData.value) == "{}") {
    proxy?.$msg.error("请选择套餐");
    return;
  }

}
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
.bg-div p {
  font-size: 13px;
  color: #000000;
  line-height: 20px;
  height: 120px;
  /* 超出显示省略号 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
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
.comboItem-bor {
  border-radius: 8px;
  border: 1px solid #21aea2;
  overflow: hidden;
}
.right-title {
  /* height: 30px; */
  margin-top: 20px;
  margin-bottom: 56px;
}

.right-title div {
  float: left;
  height: 100%;
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.tab-one {
  margin-right: 20px;
}
/* 右侧内容大盒子 */
.right-content {
  position: relative;
  border: 1px solid #bcebe6;
  /* height: 800px; */
  min-height: 800px;
  width: 690px;
  padding: 0 0 20px 40px;
  border-radius: 2%;
  background-color: #fff;
}
.member-login {
  margin-top: 40px;
}

/* 输入框宽度 :deep() */
.index :deep(.el-input__inner) {
  height: 40px;
  width: 450px;
}

/* 输入框样式 */
.index :deep(.el-input__wrapper) {
  border: 1px solid #21aea2;
  box-shadow: none;
  width: 480px;
}

.index :deep(.el-form--inline .el-form-item) {
  margin: 0;
}

/* 右侧查询按钮样式 */
.selectBtn {
  display: inline-block;
  width: 90px;
  height: 40px;
  background: #21aea2;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  line-height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.basic {
  margin-top: 20px;
  height: 70px;
}

.basic img {
  width: 60px;
  height: 60px;
}

.basic img,
.basic-right {
  float: left;
}

.basic-right {
  margin-left: 20px;
}

.basic-name {
  font-size: 20px;
  margin-bottom: 8px;
  color: #089488;
  font-weight: 700;
}

.basic-phone {
  margin-left: 20px;
}
.no-data {
  text-align: center;
  margin-top: 20px;
}

.tourist-box .el-input {
  width: 640px;

  /* overflow: hidden; */
}
.tourist-box :deep(.el-input__wrapper) {
  border-radius: 24px !important;
  background: #f9fffe;
  opacity: 1;
}

/* 右侧左边游客 */
.gender-check {
  float: left;
  cursor: pointer;
}
.gender-check.left {
  margin-right: 74px;
}
.gender-box {
  width: 325px;
  height: 72px;
  margin: 0 auto;
}
.tourist-title {
  text-align: center;
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 15px;
}

/* 单选按钮选中样式 */
.right-content
  :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  background-color: #e2fffc;
  border: 1px solid #2ab1a6;
  color: #21aea2;
}
/* 单选按钮默认样式 */
.right-content :deep(.el-radio-button--large .el-radio-button__inner) {
  margin-right: 20px;
  width: 150px;
  border-radius: 20px;
  background-color: #ececec;
  border: none;
  color: #878787;
  margin-bottom: 15px;
  border: 1px solid #ececec;
}

.check-item {
  margin-top: 20px;
  /* margin-bottom: 20px; */
}
// .check-tag {
//   margin-right: 20px;
//   width: 150px;
//   height: 40px;
//   border-radius: 20px;
//   background-color: #ececec;
//   border: none;
//   color: #303030;
//   margin-bottom: 15px;
//   float: left;
//   text-align: center;
//   line-height: 40px;
//   font-size: 14px;
// }
/* 多选按钮默认样式 */
.right-content :deep(.el-checkbox-button--large .el-checkbox-button__inner) {
  margin-right: 20px;
  /* width: 150px; */
  border-radius: 20px;
  background-color: #ececec;
  border: none;
  color: #878787;
  margin-bottom: 15px;
  border: 1px solid #ececec;
}

/* 多选按钮选中样式 */
.right-content
  :deep(.el-checkbox-button.is-checked .el-checkbox-button__inner) {
  background-color: #e2fffc;
  border: 1px solid #2ab1a6;
  color: #21aea2;
}
.submit-order {
  width: 200px;
  height: 50px;
  background-color: #21aea2;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  margin: 30px auto;
  cursor: pointer;
  /* position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -100px; */
}
</style>

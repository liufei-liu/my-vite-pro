declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.json" {
  // 定义设备时间项的类型
  interface TimeListItem {
    equipment: string;  // 明确 equipment 类型
    timeList: Array<{
      startTime: any;
      endTime: any;
    }>; 
  }
}
declare module "*.json" {
  const value: {
    list: Array<{ id: number; name: string;list:any }>  // 根据实际结构修改
    member:{gender:string,age:number,name:string,phone_number:any}
    illArr:[],
    therapistArr:[],
    timeList: TimeListItem[];  //  正确定义数组类型
  }
// types/shared.d.ts
declare module '*.json' {
  export const showMessage: (text: string) => void
  export type MessageType = 'success' | 'error'
}


import type { MessageModule } from '@/shared/js/msg';  // 根据实际路径调整
declare module 'vue' {
  interface ComponentCustomProperties {
    $msg: MessageModule;  // 与导入类型保持一致
  }
}
  export default value
}

// declare module "*.json" {
//   type ComboItem = {
//     activity: boolean
//     description: string
//     equip_name: string
//     equipment: string
//     group_name: string
//     id: string  // 实际数据是字符串类型
//     member_price: number
//     name: string
//     normal_price: number
//     pic: string
//     sale_price: number
//     state: boolean
//     time: string
//     marks: string
//   }

//   export type RootListType = {
//     list: Array<{
//       list: ComboItem[]  // 嵌套的list属性
//       // 可添加其他顶层字段
//       id?: string
//       name?: string
//     }>
//   }

//   const value: RootListType
//   export default value
// }

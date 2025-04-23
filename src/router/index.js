//路由
import { createRouter, createWebHashHistory } from "vue-router"
import home from "../page/home.vue"
import index from "../page/index/index.vue"
import combo from "../page/combo/index.vue"
import member from "../page/member/index.vue"
import physicalTherapist from "../page/physicalTherapist/index.vue"
import disease from "../page/disease/index.vue"
import statement from "../page/statement/index.vue"
import equipment from "../page/equipment/index.vue"



const routes=[
    {
     path:"/",
     redirect:{ path: '/home/index' } 

    },
    {
    path:"/home",
    name:"home",
    component:home,
    children:[
        {
            path:"/home/index",
            name:"index",
            component:index,
        },
        {
            path:"/home/combo",
            name:"combo",
            component:combo,
        },
        {
            path:"/home/member",
            name:"member",
            component:member,
        },
        {
            path:"/home/physicalTherapist",
            name:"physicalTherapist",
            component:physicalTherapist,
        },
        {
            path:"/home/disease",
            name:"disease",
            component:disease,
        },
        {
            path:"/home/statement",
            name:"statement",
            component:statement,
        },
        {
            path:"/home/equipment",
            name:"equipment",
            component:equipment,
        }
    ]
    }];





const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;
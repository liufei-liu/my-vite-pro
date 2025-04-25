let memberConfig = {};
memberConfig.list={
    "code": 0,
    "message": "success",
    "totalCount": 7,
    "todayCount": 0,
    "result": [
        {
            "id": "51",
            "name": "fffhw",
            "phone_number": "15678900987",
            "create_time": "2023-12-13 16:10:13",
            "age": "23",
            "gender": "女",
            "last_time": "",
            "last_plan": "",
            "medical_history": "心脏病患者，阴虚发热",
            "remarks": "11111"
        },
        {
            "id": "50",
            "name": "lisa",
            "phone_number": "13311112222",
            "create_time": "2023-11-24 15:20:10",
            "age": "66",
            "gender": "女",
            "last_time": "",
            "last_plan": "",
            "medical_history": "老年人",
            "remarks": ""
        },
        {
            "id": "49",
            "name": "小明",
            "phone_number": "13278001212",
            "create_time": "2023-11-24 15:16:18",
            "age": "32",
            "gender": "女",
            "last_time": "",
            "last_plan": "",
            "medical_history": "心脏病患者",
            "remarks": ""
        },
        {
            "id": "48",
            "name": "老杨",
            "phone_number": "18345841256",
            "create_time": "2023-11-22 14:35:31",
            "age": "46",
            "gender": "男",
            "last_time": "2023-11-22 14:37:03",
            "last_plan": "臀部后侧燃脂",
            "medical_history": "进行过骨科手术患者，骨折，偏瘫患者",
            "remarks": ""
        },
        {
            "id": "46",
            "name": "大海",
            "phone_number": "18345841526",
            "create_time": "2023-10-25 14:34:35",
            "age": "36",
            "gender": "男",
            "last_time": "2023-11-22 14:37:24",
            "last_plan": "超声波燃脂",
            "medical_history": "颈椎病",
            "remarks": ""
        },
        {
            "id": "45",
            "name": "小红",
            "phone_number": "18345841521",
            "create_time": "2023-10-22 14:34:10",
            "age": "26",
            "gender": "女",
            "last_time": "2023-12-20 14:56:32",
            "last_plan": "腰部酸痛调理",
            "medical_history": "做过手术",
            "remarks": ""
        },
        {
            "id": "47",
            "name": "lili",
            "phone_number": "18345841523",
            "create_time": "2023-09-22 14:35:10",
            "age": "30",
            "gender": "女",
            "last_time": "2023-11-22 14:38:20",
            "last_plan": "腹部紧致",
            "medical_history": "产后/哺乳期",
            "remarks": ""
        }
    ]
}

memberConfig.listDetails={
    "code": 0,
    "message": "success",
    "result": {
        "member": {
            "id": "47",
            "name": "lili",
            "phone_number": "18345841523",
            "create_time": "2023-09-22 14:35:10",
            "age": "30",
            "gender": "女",
            "last_time": "2023-11-22 14:38:20",
            "last_plan": "腹部紧致",
            "medical_history": "产后/哺乳期",
            "remarks": ""
        },
        "total_days": "96",
        "total_times": "3",
        "total_prices": "817"
    }
}


memberConfig.listFlow={
    "code": 0,
    "message": "success",
    "flowList": [
        {
            "year": "2023",
            "month": "11",
            "sumMoney": 817,
            "itemList": [
                {
                    "day": "22",
                    "name": "腹部紧致",
                    "price": 289
                },
                {
                    "day": "22",
                    "name": "大腿后侧紧致",
                    "price": 269
                },
                {
                    "day": "22",
                    "name": "臀部后侧紧致",
                    "price": 259
                }
            ]
        }
    ]
}


memberConfig.listFlowChat={
    "code": 0,
    "message": "success",
    "result": [
        {
            "plan": "臀部后侧紧致",
            "price": 259
        },
        {
            "plan": "大腿后侧紧致",
            "price": 269
        },
        {
            "plan": "腹部紧致",
            "price": 289
        }
    ]
}

window.memberConfig = memberConfig;
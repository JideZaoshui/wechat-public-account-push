export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxa473d2ca2cc708c9",
    // 公众号APP_SECRET
    APP_SECRET: "4d1c457b72bd5f0dfc899c2972e422d0",
    // 模板消息id
    TEMPLATE_ID: "b9AOfLS_9nDUR9m9orJBhpM5zN5fjnklXYZdtNxYuTA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["o2z3m5p3OGIE2CAckijMKadxT8l0"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "山东",
    // 所在城市
    CITY: "潍坊",

 /** 生日相关 */ 
   // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写 
 BIRTHDAYS: [ 
 {"name": "林小爱", "year": "2001", "date": "09-21"}, 
 {"name": "鹏小🐟", "year": "2001", "date": "12-19"}, 
 ], 
   /** 日期相关 */ 
   // 在一起的日子，格式同上 
 LOVE_DATE: "2021-03-14",  
     /** 好文节选 */ 
   // 好文节选的内容类型 
 // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 "" 
 LITERARY_PREFERENCE: "" 
     } 
//📆今天是 {{date.DATA}}  
//🌏城市：{{city.DATA}}  
//⛅天气：{{weather.DATA}}  
//🌘最低气温: {{min_temperature.DATA}}  
//🌞最高气温: {{max_temperature.DATA}}  
//💕今天是我们恋爱的第{{love_day.DATA}}天
//{{birthdays_message.DATA}}
// {{note_en.DATA}}  
// {{note_ch.DATA}} 

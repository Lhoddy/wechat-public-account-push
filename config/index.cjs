/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx56b2eaaf052762d3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '61a519012920dc9bae9f38defc6562cd',

  PROVINCE: '湖南',
  CITY: '长沙',
  
  SWITCH: {
    weather: true,
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    poetry: true,
    horoscope: true,
  },
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '霏霏宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogag-5k8tjTeCsA_5709waEOLxoQ', //ogag-5k8tjTeCsA_5709waEOLxoQ
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'sPBi9Erd9ZCxEzJp0-MsPG77QwBTTi9189sV4m44Ozs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-06',
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        /*{
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        */
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1996', date: '09-06',
        },
        /*{
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },*/
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-07-20' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'gVoQGk2p8fgVewn6qNy-M_Q1vIELRT25Ne8eIb0JMoU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogag-5hMAKoFuz5ItjGJHCMmxzoQ',
    }
  ],

}

module.exports = USER_CONFIG


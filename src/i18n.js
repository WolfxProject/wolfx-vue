import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

i18next
  .init({
    debug: false,
    fallbackLng: 'ja',
    resources: {
      'zh-CN': {
        translation: {
          OpenApiDoc: 'API 调用文档',
          WolfxIntroduce: 'Wolfx Project 是一个公益项目, 旨在免费提供各种实用服务。',
          WolfxOpenApiIntroduce1: '高可靠与宽应用范围的开放JSON API',
          WolfxOpenApiIntroduce2: '支持WebSocket与传统GET调用',
          WolfxOpenApiIntroduce3: 'Wolfx Open API 提供了与地震防灾相关和一些实用类的API供开发者调用',
          WolfxOpenApiIntroduce4: '调用完全免费且原则上不限制用途, 单个API每秒调用次数不得超过2次,全年SLA保证99.0%',
          WREMIntroduce1: 'Wolfx 实时地震观测',
          WREMIntroduce2: 'Wolfx Real-time Earthquake Monitoring 提供了一个简易的实时地震监测聚合与一些模块供使用',
          WREMIntroduce3: '本服务所有内容均向公众公开, 您可以在遵守以下文档内条例的前提下自由使用',
          WREMDoc: 'WREM 使用文档',
          ACGKRIntroduce1: 'ACG.kr 公共网址缩短服务',
          ACGKRIntroduce2: 'ACG.kr 是一个基于 YOURLS 的公益网址缩短服务',
          ACGKRDoc: '立即使用',
          wolfxmcIntroduce1: 'Wolfx Minecraft 原版生存服务器',
          wolfxmcIntroduce2: 'Wolfx是一个以原版纯净生存为主，地图永不重置的高自由度少限制服务器，本服对原版生存机制几乎没有修改，始终跟随最新更新，并且永久公益免费开放',
          wolfxmcDoc: '立即加入',
        },
      },
      ja: {
        translation: {
          OpenApiDoc: 'API 呼び出し文書',
          WolfxIntroduce: 'Wolfx Project は公益プロジェクトで、様々な実用的なサービスを無料で提供しています。',
          WolfxOpenApiIntroduce1: '高い信頼性と広範囲のアプリケーションで使える開放的なJSON API',
          WolfxOpenApiIntroduce2: 'WebSocketと従来のGET呼び出しに対応',
          WolfxOpenApiIntroduce3: 'Wolfx Open API は、地震防災関連及び実用的なAPIを開発者に提供しています',
          WolfxOpenApiIntroduce4: 'APIの呼び出しは完全に無料で、原則として使用目的に制限はありませんが、1秒間にAPIを2回以上呼び出すことはできません。年間SLA保証は99.0%です',
          WREMIntroduce1: 'Wolfx リアルタイム地震観測',
          WREMIntroduce2: 'Wolfx Real-time Earthquake Monitoring は、簡易的なリアルタイム地震監視集約といくつかのモジュールを提供しています',
          WREMIntroduce3: 'このサービスのすべての内容は公開されており、以下の文書に記載された条例を遵守する前提で自由に使用できます',
          WREMDoc: 'WREM 使用文書',
          ACGKRIntroduce1: 'ACG.kr 公共のURL短縮サービス',
          ACGKRIntroduce2: 'ACG.kr は、YOURLS を基にした公益のURL短縮サービスです',
          ACGKRDoc: '今すぐ使用',
          wolfxmcIntroduce1: 'Wolfx Minecraft バニラサバイバルサーバー',
          wolfxmcIntroduce2: 'Wolfxは、バニラの純粋なサバイバルを主とし、マップがリセットされない高い自由度と少ない制約のサーバーです。本サーバーはバニラのサバイバルメカニズムをほぼ変更せず、常に最新の更新を追従し、永久に公益無料で公開しています',
          wolfxmcDoc: '今すぐ参加'          
        },
      },
      en: {
        translation: {
          OpenApiDoc: 'API Documentation',
          WolfxIntroduce: 'Wolfx Project is a public service project aimed at providing a variety of practical services for free.',
          WolfxOpenApiIntroduce1: 'Highly reliable and widely applicable open JSON API',
          WolfxOpenApiIntroduce2: 'Supports WebSocket and traditional GET calls',
          WolfxOpenApiIntroduce3: 'Wolfx Open API provides APIs related to earthquake disaster prevention and other practical categories for developers to use',
          WolfxOpenApiIntroduce4: 'Usage of the API is completely free and in principle not restricted, with a limit of no more than 2 calls per second per API, with an annual SLA guarantee of 99.0%',
          WREMIntroduce1: 'Wolfx Real-time Earthquake Monitoring',
          WREMIntroduce2: 'Wolfx Real-time Earthquake Monitoring offers a simple real-time earthquake monitoring aggregation and some modules for use',
          WREMIntroduce3: 'All content of this service is publicly available, and you can freely use it under the premise of complying with the regulations stated in the following documents',
          WREMDoc: 'WREM Documentation',
          ACGKRIntroduce1: 'ACG.kr Public URL Shortening Service',
          ACGKRIntroduce2: 'ACG.kr is a public welfare URL shortening service based on YOURLS',
          ACGKRDoc: 'Use Now',
          wolfxmcIntroduce1: 'Wolfx Minecraft Vanilla Survival Server',
          wolfxmcIntroduce2: 'Wolfx is a high-freedom, low-restriction server that focuses on pure vanilla survival with a map that never resets. Our server barely modifies the vanilla survival mechanics, always follows the latest updates, and is permanently free and open to the public',
          wolfxmcDoc: 'Join Now'          
        },
      },
    },
  })

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
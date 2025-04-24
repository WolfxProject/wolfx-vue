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
          seisjsIntroduce1: 'Wolfx SeisJS 地震观测',
          seisjsIntroduce2: 'SeisJS 是一个利用移动设备加速度计进行地震观测的项目，并透过网络提供公开 API 服务',
          seisjsDoc: '立即加入 SeisJS',
          ssvDoc: '立即使用 SSV',
          link1: '夜曦的blog站点',
          link2: 'RC的站点',
          link3: 'The [object Object]',
          PrivacyPolicy: '隐私政策',
          TOS: '服务条款',
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
          seisjsIntroduce1: 'Wolfx SeisJS 地震観測',
          seisjsIntroduce2: 'SeisJSは、モバイルデバイスの加速度計を利用して地震観測を行い、ネットワーク化して集計APIを提供するプロジェクトです',
          seisjsDoc: 'SeisJS に参加する',
          ssvDoc: 'SSV を使ってみよう',
          link1: '夜曦のblog',
          link2: 'RCのサイト',
          link3: 'The [object Object]',
          PrivacyPolicy: 'プライバシーポリシー',
          TOS: '利用規約',
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
          seisjsIntroduce1: 'Wolfx SeisJS Monitor',
          seisjsIntroduce2: 'SeisJS is a project that utilizes the accelerometers of mobile devices for earthquake observation and provides aggregated APIs through networking',
          seisjsDoc: 'Join SeisJS Now',
          ssvDoc: 'Using SSV Now',
          link1: 'Yorushi\'s blog',
          link2: 'RC\'s site',
          link3: 'The [object Object]',
          PrivacyPolicy: 'Privacy Policy',
          TOS: 'TOS',
        },
      },
    },
  })

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}

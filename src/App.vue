<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar class="me-3" image="images/logo.png" rounded="0" />

            Wolfx Project
          </div>
        </v-app-bar-title>

        <v-spacer />

        <v-btn-alt :text="currentLanguage.nativeName" @click="toggleLanguage" />

      </v-container>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet class="d-flex align-center pb-16" color="grey-darken-3">
          <v-container class="text-center">
            <v-responsive class="mx-auto" width="500">
              <v-img src="" height="100" />

              <h3 class="text-h3">
                Wolfx Project
              </h3>

              <p class="mt-4 text-medium-emphasis">
                {{ $t('WolfxIntroduce') }}
              </p>
            </v-responsive>
          </v-container>
        </v-sheet>
      </section>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Wolfx Open API
                  </h2>

                  <p class="text-success mt-3">
                    {{ $t('WolfxOpenApiIntroduce1') }}
                  </p>

                  <strong class="mt-3">
                    {{ $t('WolfxOpenApiIntroduce2') }}
                  </strong>

                  <p class="mt-8">
                    {{ $t('WolfxOpenApiIntroduce3') }}
                  </p>

                  <p class="mt-8">
                    {{ $t('WolfxOpenApiIntroduce4') }}
                  </p>

                  <v-btn class="mt-6" :href="currentLanguageCode === 'ja' ? 'https://wolfx.jp/apidoc?nodetect' :
                    currentLanguageCode === 'zh-CN' ? 'https://wolfx.jp/apidoc_zh' :
                      'https://wolfx.jp/apidoc_en'" target="_blank" rel="noopener">
                    {{ $t('OpenApiDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img max-width="400" src="images/API.png" />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Wolfx Real-time Earthquake Monitoring
                  </h2>

                  <p class="text-success mt-3">
                    {{ $t('WREMIntroduce1') }}
                  </p>

                  <p class="mt-3">
                    {{ $t('WREMIntroduce2') }}
                  </p>

                  <p class="mt-8">
                    {{ $t('WREMIntroduce3') }}
                  </p>

                  <v-btn class="mt-6" href="https://bs.wolfx.jp/about.html" rel="noopener" target="_blank">
                    {{ $t('WREMDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img max-width="400" src="images/WREM.png" />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    ACG.kr URL Shortener
                  </h2>

                  <p class="text-success mt-3">
                    {{ $t('ACGKRIntroduce1') }}
                  </p>

                  <p class="mt-3">
                    {{ $t('ACGKRIntroduce2') }}
                  </p>

                  <v-btn class="mt-6" href="https://acg.kr" rel="noopener" target="_blank">
                    {{ $t('ACGKRDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img max-width="400" src="images/ACGKR.png" />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet class="py-16" color="#181818">
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive class="overflow-visible" width="350">
                  <h2 class="text-h4">
                    Wolfx SeisJS
                  </h2>

                  <p class="text-success mt-3">
                    {{ $t('seisjsIntroduce1') }}
                  </p>

                  <p class="mt-3">
                    {{ $t('seisjsIntroduce2') }}
                  </p>

                  <div class="d-flex ga-4 mt-6">
                    <v-btn color="primary" href="https://wolfx.jp/seisjs" target="_blank" rel="noopener">
                      {{ $t('seisjsDoc') }}
                    </v-btn>
                    <v-btn color="primary" href="https://wolfx.jp/ssv" target="_blank" rel="noopener">
                      {{ $t('ssvDoc') }}
                    </v-btn>
                  </div>

                </v-responsive>
              </v-col>

              <v-img max-width="400" max-height="350" src="images/seisJS.png" />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2017-{{ (new Date()).getFullYear() }} Wolfx Project
          <a :href="currentLanguageCode === 'ja' ? 'https://wolfx.jp/privacy_policy' :
            currentLanguageCode === 'zh-CN' ? 'https://wolfx.jp/privacy_policy_zh' :
              'https://wolfx.jp/privacy_policy_en'" target="_blank" rel="noopener">
            {{ $t('PrivacyPolicy') }}
          </a> <a :href="currentLanguageCode === 'ja' ? 'https://wolfx.jp/tos' :
            currentLanguageCode === 'zh-CN' ? 'https://wolfx.jp/tos_zh' :
              'https://wolfx.jp/tos_en'" target="_blank" rel="noopener">
            {{ $t('TOS') }}
          </a>
          <div>Links <a href="https://blog.yorushi.top" target="_blank" rel="noopener">
              {{ $t('link1') }}
            </a> <a href="https://bousai.cn" target="_blank" rel="noopener">
              {{ $t('link2') }}
            </a> <a href="https://n0w0n.com" target="_blank" rel="noopener">
              {{ $t('link3') }}
            </a>
          </div>
        </div>

        <div>
          <a href="https://github.com/WolfxProject" target="_blank" rel="noopener">Github</a>&nbsp;
          <a href="https://wolfx.jp/donate" target="_blank" rel="noopener">Donate</a>&nbsp;
          <a href="https://status.wolfx.jp" target="_blank" rel="noopener">Service status</a>
        </div>

        <!--<v-icon icon="$vuetify" size="x-large" />-->
      </v-container>
    </v-footer>
    <div v-if="showIframe"
      style="position: fixed; bottom: 2px; right: -20px; width: 16.5rem; height: 15em; border-top-left-radius: 12px; overflow: hidden; z-index: 1000;">
      <iframe src="https://support.nodeget.com/page/promotion?id=165"
        style="width: 100%; height: 100%; border: none;"></iframe>

      <button @click="showIframe = false" style="position: absolute; top: 8px; right: 24px; background: rgba(255,255,255,0.8); border: none; border-radius: 50%;
           width: 20px; height: 20px; font-size: 14px; font-weight: bold; cursor: pointer;">
        ×
      </button>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'TranslationShowCase',
  data() {
    return {
      languages: {
        ja: { nativeName: '日本語 | Lang' },
        zh: { nativeName: '简体中文 | Lang' },
        en: { nativeName: 'English | Lang' },
      },
      currentLanguageCode: 'en',
      showIframe: true,
    }
  },
  computed: {
    currentLanguage() {
      return this.languages[this.currentLanguageCode]
    },
  },
  methods: {
    toggleLanguage() {
      const codes = Object.keys(this.languages)
      const index = codes.indexOf(this.currentLanguageCode)
      this.currentLanguageCode = codes[(index + 1) % codes.length]
      this.$i18next.changeLanguage(this.currentLanguageCode)
      document.documentElement.lang = this.currentLanguageCode;
    },
    detectBrowserLanguage() {
      const preferredLanguages = navigator.languages || [navigator.language || navigator.userLanguage]
      for (const lang of preferredLanguages) {
        if (lang.startsWith('ja')) {
          this.currentLanguageCode = 'ja'
          break
        } else if (lang.startsWith('zh')) {
          this.currentLanguageCode = 'zh'
          break
        } else {
          this.currentLanguageCode = 'en'
        }
      }
      this.$i18next.changeLanguage(this.currentLanguageCode)
      document.documentElement.lang = this.currentLanguageCode;
    },
  },
  mounted() {
    this.detectBrowserLanguage()
  },
}
</script>

<script setup>
//
</script>

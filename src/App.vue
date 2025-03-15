<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              class="me-3"
              image="images/Vite.png"
              rounded="0"
            />

            Wolfx Project
          </div>
        </v-app-bar-title>

        <v-spacer />

        <v-btn-alt
          :text="currentLanguage.nativeName"
          @click="toggleLanguage"
        />

      </v-container>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet
          class="d-flex align-center pb-16"
          color="grey-darken-3"
        >
          <v-container class="text-center">
            <v-responsive class="mx-auto" width="500">
              <v-img
                src="images/Vite.png"
                height="400"
              />

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

                  <v-btn
                    class="mt-6"
                    href="https://wolfx.jp/apidoc"
                    target="_blank"
                    rel="noopener"
                  >
                    {{ $t('OpenApiDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="images/API.png"
              />
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

                  <v-btn
                    class="mt-6"
                    href="https://bs.wolfx.jp/about.html"
                    rel="noopener"
                    target="_blank"
                  >
                    {{ $t('WREMDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="images/WREM.png"
              />
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

                  <v-btn
                    class="mt-6"
                    href="https://acg.kr"
                    rel="noopener"
                    target="_blank"
                  >
                    {{ $t('ACGKRDoc') }}
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="images/ACGKR.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818"
      >
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive
                  class="overflow-visible"
                  width="350"
                >
                  <h2 class="text-h4">
                    Wolfx SeisJS
                  </h2>

                  <p class="text-success mt-3">
                    {{ $t('seisjsIntroduce1') }}
                  </p>

                  <p class="mt-3">
                    {{ $t('seisjsIntroduce2') }}
                  </p>

                  <v-btn-alt
                    class="mt-6 "
                    href="https://wolfx.jp/seisjs/"
                    target="_blank"
                    rel="noopener"
                    :text="$t('seisjsDoc')"
                  />
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                max-height="350"
                src="images/seisJS.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2017-{{ (new Date()).getFullYear() }} Wolfx Project
          <div>Links <a href="https://www.yorushi.com/" target="_blank" rel="noopener">
            {{ $t('link1') }}
          </a> <a href="https://bousai.cn/" target="_blank" rel="noopener">
            {{ $t('link2') }}
          </a> <a href="https://n0w0n.com/" target="_blank" rel="noopener">
            {{ $t('link3') }}
          </a></div>
        </div>

        <div>
          <a href="https://github.com/WolfxProject" target="_blank" rel="noopener">Github</a>&nbsp;
          <a href="https://wolfx.jp/donate" target="_blank" rel="noopener">Donate</a>&nbsp;
          <a href="https://status.wolfx.jp" target="_blank" rel="noopener">Service status</a>
        </div>

        <!--<v-icon icon="$vuetify" size="x-large" />-->
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'TranslationShowCase',
    data () {
      return {
        languages: {
          ja: { nativeName: '日本語 | Lang' },
          'zh-CN': { nativeName: '简体中文 | Lang' },
          en: { nativeName: 'English | Lang' },
        },
        currentLanguageCode: 'ja',
      }
    },
    computed: {
      currentLanguage () {
        return this.languages[this.currentLanguageCode]
      },
    },
    methods: {
      toggleLanguage () {
        const codes = Object.keys(this.languages)
        const index = codes.indexOf(this.currentLanguageCode)
        this.currentLanguageCode = codes[(index + 1) % codes.length]
        this.$i18next.changeLanguage(this.currentLanguageCode)
      },
    },
  }
</script>

<script setup>
  //
</script>

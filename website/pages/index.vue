<template>
  <main>
    <Header />
    <GeneralInfo />
    <Why />
    <Tools />
    <!-- <Partners /> -->
    <HowItWorks />
    <Introduction />
    <ConsultingAndSupport />
    <QuickStart />
  </main>
</template>

<script>
import Header from '@/components/index/Header.vue'
import GeneralInfo from '@/components/index/GeneralInfo.vue'
import Why from '@/components/index/Why.vue'
import Tools from '@/components/index/Tools.vue'
// import Partners from '@/components/index/Partners.vue'
import HowItWorks from '@/components/index/HowItWorks.vue'
import Introduction from '@/components/index/Introduction.vue'
import ConsultingAndSupport from '@/components/index/ConsultingAndSupport.vue'
import QuickStart from '@/components/index/QuickStart.vue'

export default {
  components: {
    Header,
    GeneralInfo,
    Why,
    Tools,
    // Partners,
    HowItWorks,
    Introduction,
    ConsultingAndSupport,
    QuickStart
  }
}
</script>
<style>
* {
  font-family: Prompt, Times, serif;
}

html {
  height: 100%;
}

body {
  height: 100%;
  position: relative;
  overflow: hidden;
}

main {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.primary_button {
  display: flex;
  align-items: center;
  padding: 0.5rem 2.25rem;
  background-color: #1A2FEE;
  margin-right: 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0px 4px 30px #BCBEFF;

  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 187% */

  color: #FFFDFD;

  cursor: pointer;
}

.primary_button span {
  margin-right: 0.625rem ;
}

.primary_button img {
  height: 1rem;
}

.secondary_button {
  display: block;
  padding: 0.5rem 2.25rem;
  border: 1px solid #000000;
  border-radius: 10px;
  text-decoration: none;
  margin-right: 1.5rem;

  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 187% */

  color: #000000;
  white-space: nowrap;
  cursor: pointer;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.container {
  padding: 0 2rem;
  margin: 9rem auto 0;
}

@media (min-width: 1300px) {
  .container {
    max-width: 1296px;
  }
}

@media (max-width: 600px) {
  .container {
    max-width: 1296px;
    margin: 0;
  }
}

</style>

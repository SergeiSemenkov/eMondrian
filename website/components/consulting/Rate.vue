<template>
  <div class="container">
    <h2>Rate</h2>
    <button class="contact_button primary_button" @click="sendEmail">
      Contact me for rate information
    </button>
  </div>
</template>

<script>
import rates from '@/data/rates.json'

export default {
  data () {
    return {
      rates: rates.rates
    }
  },
  methods: {
    sendEmail() {
      window.location = "mailto:siarhei.semiankou@gmail.com";
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact_button {

}

h2 {
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  color: #000000;

  margin-bottom: 3.5rem;
}

table {
  margin: 0 auto;
  width: 100%;
  max-width: 53rem;
  border-collapse: collapse;
}

table tbody td {
  padding: 1.5rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5;
}

table tbody tr:nth-child(2) td:nth-child(2) {
  border-radius: 0px 0px 12px 12px;
}

table tbody tr:nth-child(1) {
  border-bottom: 1px solid #CBCCD8;
}

table thead td:nth-child(2) {
  padding: 1.5rem;

  background: #1A2FEE;
  border-radius: 12px 12px 0px 0px;

  color: #FFFFFF;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5;
}

table tbody td:nth-child(2) {
  width: 9.5rem;
  background: #EBF1FD;
  color: #1A2FEE;
}
table tbody td:nth-child(1) {
  color: #000000;
}

@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
    line-height: 1.5;
}

  table tbody td {
    font-size: 1rem;
    line-height: 1.87;
  }

  table thead td:nth-child(2) {
    font-size: 1rem;
    line-height: 1.87;
  }

  table tbody td:nth-child(2) {
    width: 10rem;
  }
}
</style>

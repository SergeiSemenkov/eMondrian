<template>
  <div class="header_container">
    <nav class="header_navigation">
      <div class="logo">
        <img src="../../assets/logo.svg">
      </div>
      <input type="checkbox">
      <div class="burger_container">
        <span />
        <span />
        <span />
      </div>
      <ul class="header_navigation_buttons">
        <li><a @click="openMore">More</a></li>
        <li><a href="./consulting">Consulting</a></li>
        <li><a href="./docs">Documentation</a></li>
        <li><a @click="openQuickStart">Quick start</a></li>
      </ul>
    </nav>
    <div class="header_main container">
      <div class="header_main_info">
        <h1>eMondrian</h1>
        <p>Add business intelligence capabilities to your databases</p>
        <div class="header_main_buttons">
          <a class="primary_button" @click="openMore">
            <span>More</span>
            <img src="../../assets/arrow.svg">
          </a>
          <a class="secondary_button" @click="openQuickStart">Quick start</a>
          <a class="secondary_button github_link" href="https://github.com/SergeiSemenkov/eMondrian">
            <img src="../../assets/github_large.svg">
            <span>Project source</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMore () {
      const el = document.querySelector('#general_info')
      document.querySelector('main').scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    },
    openQuickStart () {
      const el = document.querySelector('#quick_start')
      document.querySelector('main').scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="css" scoped>
.header_container {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-image: url("../../assets/back23.svg");
  backdrop-filter: blur(5px);
  background-position: right 33% bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.header_navigation .logo {
  position: absolute;
}

.header_navigation {
  display: block;
  width: 100%;
  max-width: 1296px;
  margin: auto;
  padding-top: 2rem;
}

.header_navigation input {
  display: none;
}

.header_background {
  position: relative;
  z-index: 0;
}

.header_navigation_buttons {
  display: flex;
  padding: 1rem 0 0;
  list-style: none;
  justify-content: center;
  margin: 0;
}

.header_navigation_buttons > li {
  padding: 0 1.75rem;
  font-size: 1rem;
  line-height: 1.875rem;
  font-weight: 500;
  font-family: Prompt;
  font-style: normal;
  color: #000000;
}

.header_navigation_buttons > li a {
  cursor: pointer;
  text-decoration: none;
  color: #000000;
}

.header_main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  margin-top: 0;
}

.header_main_buttons {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 350px;
  gap: 1.5rem;
}

.header_main_buttons > a:nth-child(1), .header_main_buttons > a:nth-child(2) {
  flex: 1 0 auto;
}

.header_main_buttons > .primary_button, .header_main_buttons > .secondary_button {
  margin-right: 0;
}

.header_main_info > h1 {
  margin: 0;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.5;
  color: #1A2FEE;
}

.header_main_info > p {
  margin: 0 0 1.5rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.5;
  color: #000000;
}

.github_link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.github_link > img {
  margin-right: 12px;
}

@media (max-width: 800px) {
  .header_navigation {
    padding-top: 0.75rem;
  }

  .header_navigation .logo {
    padding-left: 0.5rem;
  }

  .header_main_info > h1 {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .header_main_info > p {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 4.5rem;
  }

  .header_navigation ul {
    padding: 3rem 0 2rem;
    display: block;
    position: absolute;
    text-align: center;
    background: #262627;
    width: 100%;

    transform: translateY(-100%);
    opacity: 0;
    transition: transform 0.5s ease-in-out,
                opacity 0.55s ease;
  }

  .header_navigation input:checked ~ ul {
    transform: translateY(0);
    opacity: 1;
  }

  .header_navigation ul > li {
    margin: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .header_navigation ul > li a {
    color: #fff;
  }

  .header_navigation input:checked ~ div span {
    opacity: 1;
    transform:  translate(4px, -15px) rotate(45deg);
    background: #FFF;
  }

  .header_navigation input:checked ~ div span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .header_navigation input:checked ~ div span:nth-last-child(2)
  {
    transform: translate(1px, 11px) rotate(-45deg);
  }

  .header_navigation input {
    display: block;
    width: 33px;
    height: 27px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  .header_navigation .burger_container {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .header_navigation span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #212121;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
}
</style>

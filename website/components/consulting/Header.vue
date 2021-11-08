<template>
  <div class="header_container">
    <nav class="header_navigation">
      <input type="checkbox">
      <div class="burger_container">
        <span />
        <span />
        <span />
      </div>
      <ul class="header_navigation_buttons">
        <li><a href="/docs">Documentation</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
    <div class="container">
      <div class="header_main_info">
        <p>Consulting and support</p>
        <div class="contacts">
          <img class="photo" src="../../assets/photo.svg">
          <h2>
            My contacts
          </h2>
          <a href="mailto:siarhei.semiankou@gmail.com?subject=Emondrian consulting">
            <img src="../../assets/mail.svg">
            <span>
              siarhei.semiankou@gmail.com
            </span>
          </a>
          <a href="skype:sergei.semenkov?userinfo">
            <img src="../../assets/skype.svg">
            <span>
              sergei.semenkov
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.header_container {
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 4rem;
  background-image: url("../../assets/back34.svg");
}

.container {
  width: 100%;
  box-sizing: border-box;
}

.header_navigation {
  display: block;
  width: 100%;
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
}
.header_navigation_buttons > li a {
  text-decoration: none;
  color: #000000;
}

.header_main_info {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.header_main_info > p {
  margin: 0 8.33% 0 8.33% ;
  width: 41.66%;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  line-height: 1.5;

  color: #000000;
}

.photo {
  width: 70%;
  max-height: 8rem;
  max-width: 8rem;
}

.contacts {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  flex-grow: 1;
  padding: 1.5rem;

  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
}

.contacts h2 {
  margin: 0.75rem 0 0;

  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.25;

  color: #000000;
}

.contacts a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;

  text-decoration: none;
  color: #000000;
  margin-top: 1.5rem;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.contacts a img {
  margin-right: 0.5rem;
}

@media (max-width: 1000px) {
  .header_main_info {
    flex-wrap: wrap;
  }

  .contacts {
    max-width: 522px;
    margin: 0 auto;
  }

  .header_main_info > p {
    margin: 0 auto 5.5rem;
    width: auto;

    font-size: 3rem;
    line-height: 1.5;
  }
}

@media (max-width: 600px) {
  .header_main_info > p {
    text-align: left;
    margin: 0 0 4rem;
    font-size: 2rem;
    line-height: 1.5;
  }

  .contacts h2 {
    font-size: 1.5rem;
    line-height: 1.67;
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

  .header_navigation ul > li a {
    color: #fff;
  }

  .header_navigation ul > li {
    margin: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.6;
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

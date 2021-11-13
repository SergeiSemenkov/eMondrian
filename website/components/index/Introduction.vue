<template>
  <div class="background">
    <div class="container">
      <div class="content">
        <img class="photo" src="../../assets/photo.svg">
        <div>
          <h2>
            Hi there! My name is Sergei Semenkov
          </h2>
          <p>
            I'm a freelance consultant and the developer of the eMondrian version of the Mondrian project.
          </p>
          <p>
            I have two decades experience in developing open source and Microsoft based OLAP solutions.
          </p>
          <p class="links">
            <a href="https://www.linkedin.com/in/sergei-semenkov-129943103/">
              <img src="../../assets/linkedin.svg">
            </a>
            <a href="https://github.com/SergeiSemenkov/">
              <img src="../../assets/github.svg">
            </a>
            <a href="mailto:siarhei.semiankou@gmail.com?subject=Emondrian consulting">
              <img src="../../assets/mail_transparent.svg">
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .background {
    background: #262627;
  }

  .content {
    display: flex;
    padding: 5rem 7rem;
    align-items: center;
  }

  .content h2 {
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;

    color: #FFFFFF;
  }

  .content p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;

    color: #FFFFFF;
  }

  .photo {
    width: 30%;
    max-height: 12rem;
    max-width: 12rem;
    margin-right: 3.5rem;
  }

  .links {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

   .links img {
    height: 2.5rem;
    margin-right: 1rem;
  }

  @media (max-width: 1200px) {
    .content {
      padding: 3rem 0;
    }
  }

  @media (max-width: 600px) {
    .content {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .content h2 {
      font-size: 1.5rem;
      line-height: 1.67;
    }

    .photo {
      margin: 0;
    }
  }
</style>

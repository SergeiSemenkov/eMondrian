<template>
  <div id="quick_start" class="container_colored">
    <h2 class="text-center">
      Quick start
    </h2>
    <div class="grid_container">
      <div class="item_1">
        <h3>Deployment</h3>
        <ol>
          <li>Download dist/emondrian.war file.</li>
          <li>Copy emondrian.war file to webapps directory of your java server (Apache Tomcat, Jetty, Tiny Java Web Server).</li>
        </ol>
      </div>
      <div class="item_2">
        <h3>Connect Microsoft Excel to Mondrian Cube:</h3>
        <p>On Excel DATA tab select From Other Sources item and then select From Analysis Services.</p>
        <p>Enter</p>
        <code><span>http://</span><span>&lt;your_server_address&gt;</span><span>:8080/</span><span>emondrian/xmla</span></code>
        <p>as Server name.</p>
        <p>For example,</p>
        <p class="example">
          <span>http://localhost:8080/</span><span>emondrian/xmla</span>
        </p>
      </div>
      <div class="item_3">
        <h3>Connect ADOMD.Net application to Mondrian Cube</h3>
        <p>To connect to mondrian from ADOMD.Net application you must use folowing connection string:</p>
        <code><span>Data Source=</span><span>http://&lt;your_server_address&gt;</span><span>:8080</span><span>/emondrian/xmla</span></code>
        <p>For example,</p>
        <p class="example">
          <span>Data Source=</span><span>http://localhost:8080/</span><span>emondrian/xmla</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/index/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
.container_colored {
  margin: 5rem 0 0;
  padding: 10rem 2rem 20rem;
  background-size: cover;
  background-position: bottom left;
  background-image: url("../../assets/back34.svg");
}

.grid_container {
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  max-width: 1296px;
  margin: 3.5rem auto 0;
  align-items: stretch;
  grid-template-areas:
    "a a a a b b b b b b b b"
    "a a a a c c c c c c c c";
}

.item_1 {
  grid-area: a;

  padding: 1.5rem 4rem 1.5rem 2.5rem;

  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 24px;
}
.item_2 {
  grid-area: b;

  padding: 1.5rem 2rem;

  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 24px;
}

.item_1 > h3 {
  text-align: center;
  margin: 0;
}

.item_1 ol {
  list-style: none;
  counter-reset: orderedlist;
}

.item_1 li {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  position: relative;
  margin-top: 12rem;
  z-index: 10;
  color: #000000;
}

.item_1 li::before {
  counter-increment: orderedlist;
  content: counter(orderedlist);

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12.5rem;
  line-height: 11rem;
  color: #C21717;

  position: absolute;
  left: -3rem;
  top: -7rem;
  z-index: -1;
}

.item_1 > h3, .item_2 > h3, .item_3 > h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  color: #000000;
}

p {
  margin: 0 0 0.5rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;

  color: #000000;
}

code {
  display: block;
  background: #000000;
  border-radius: 12px;
  color: #FFFFFF;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
}

.item_3 {
  grid-area: c;

  padding: 1.5rem 2rem;

  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 24px;
}

.example {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #000000;
}

@media (max-width: 1200px) {
  .container_colored {
    margin: 9rem 0 0;
  }

  .grid_container {
    grid-template-areas:
      "a b"
      "c c";
  }

  .item_1 {
    padding: 1.5rem 2rem;
  }

  .item_1 ol {
    padding: 0;
  }

  .item_1 li::before {
    left: 1rem;
    top: -9rem;
  }

  p.example, code {
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .container_colored {
    margin: 9rem 0 0;
    padding: 3rem 2rem 13rem;
  }

  .grid_container {
    grid-template-areas:
      "a"
      "b"
      "c";
  }

  .item_1 {
    padding: 1.5rem 2rem;
  }

  .item_1 ol {
    padding: 0;
  }

  .item_1 li::before {
    left: 1rem;
    top: -9rem;
  }

  p.example, code {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

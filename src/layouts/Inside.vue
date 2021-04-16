<template>
  <div class="layout footerLayDown">
    <div class="footerPusher">
      <header role="banner">
      
        <a href="/" class="header-link-index">
          <div class="content-narrow">
            <h2>Spot SDK Education</span></h2>
          </div>
        </a>

      </header>

      <div class="content-narrow">
        <slot/>
      </div>
    </div>

    <footer>

      <div class="content columns">
        <div>
          <h4>Service provider:</h4>
          <g-link to="https://merklebot.com/">MerkleBot</g-link>
        </div>
        <div>
          <h4>Educational program by:</h4>
          <g-link to="https://multi-agent.io">MASSCI4.0</g-link>
        </div>
        <div>
          <h4>Powered by:</h4>
          <g-link to="https://robonomics.network">Robonomics</g-link>
        </div>
      </div>

    </footer>
  </div>
</template>

<style scoped>
  header {
    background-color: var(--color-lilac);
    margin-bottom: calc(var(--space)*4);
  }

  .header-link-index {
    display: block;
    padding-top: calc(var(--space)*3);
    padding-bottom: calc(var(--space)*3);
    color: #fff;
  }

  .header-link-index:hover {
    color: #fff
  }

  .header-link-index h2:before {
    content:"";
    display: inline-block;
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background-color: var(--color-yellow);
    margin-right: 3rem;
  }

  h1 {
    margin-bottom: calc(var(--space)*2);
  }

  footer {
    padding-top: calc(var(--space)*2);
    padding-bottom: calc(var(--space)*2);
    margin-top: var(--space);
    border-top: 1px solid #000
  }

  footer .columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space);
    justify-items: center
  }

  .footerLayDown {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .footerPusher {
    flex: 1 0 auto;
  }

  @media screen and (max-width: 580px) {
      footer .columns {
        grid-template-columns: 1fr;
        text-align: center;
      }
  }
</style>
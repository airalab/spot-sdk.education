<template>
  <Layout>

    <div class="screen screen-dark screen-video">
      <div class="screen-content intro">
          <div class="part-1">
            <h2>Educational program based on Boston Dynamics SDK</h2>
          </div>
          
          <div class="part-2">
            <h1><span>Become a certified</span> Spot developer</h1>

            <form class="content-narrow" @submit="handleSubmit" v-if="status!='load'" :class="'status-'+status">
              <div><input type="email" placeholder="Your email" v-model="email" name="email" required/></div>
              <div><label><input type="checkbox" name="agreement" required/> Accept <a href="/privacy-agreement" target="_blank">privacy agreement</a></label></div>
              <div><input type="submit" value="Start" /></div>
            </form>

            <div v-if="status=='load'" class="submition-complete">
              <div class="spot animated">
                <img class="spot-body" src="/media/spot-body.png"/>
                <img class="spot-leg1-top" src="/media/spot-leg1-top.png"/>
                <img class="spot-leg1-bottom" src="/media/spot-leg1-bottom.png"/>
                <img class="spot-leg2-top" src="/media/spot-leg2-top.png"/>
                <img class="spot-leg2-bottom" src="/media/spot-leg2-bottom.png"/>
                <img class="spot-leg3-top" src="/media/spot-leg3-top.png"/>
                <img class="spot-leg3-bottom" src="/media/spot-leg3-bottom.png"/>
                <img class="spot-leg4-top" src="/media/spot-leg4-top.png"/>
                <img class="spot-leg4-bottom" src="/media/spot-leg4-bottom.png"/>
              </div>
              <h3>I'll be ready to help you study robotics soon!</h3>
              We received your contact email {{email}}
            </div>
        </div>

        <div class="part-3">
          <ul class="highlights content-narrow">
            <li><span>Lessons <g-link to="https://multi-agent.io">from PhD</g-link> &</span> Master degrees in robotics</li>
            <li><span>Blockchain proofed</span> certification provided</li>
            <li><span>Powered by</span> <g-link to="https://robonomics.network">Robonomics</g-link> & <g-link to="https://polkadot.network">Polkadot</g-link></li>
          </ul>
        </div>
      </div>

      <video autoplay loop muted poster="/media/spot-yoga.png">
        <source src="/media/spot-yoga-web-3.mp4" type="video/mp4">
      </video>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Become a certified Boston Dynamics Spot developer'
  },

  data () {
    return {
      // errors: [],
      email: null,
      status: 'none'
    }
  },

  methods: {

    async handleSubmit(e) {
      e.preventDefault()

      this.status = 'wait'

      let request = ''

      if(this.email){
        request = 'email=' + encodeURIComponent(this.email)
      }

      await fetch('https://ipapi.co/json/')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if(data){
          request += '&ip=' + data.ip + '&country=' + data.country_name + '&city=' + data.city
        }
      })

      fetch('https://script.google.com/macros/s/AKfycbywsSovPvQS985MKiRwflTFMUGzGM9k2nXhUt0VP9ypXNs_R4RnzSN6X-w3hCLtksFb/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: request
      })
      .then(() => this.status = 'load')
      .catch(error => this.status = 'error')

    }


  }
}
</script>

<style scoped>

  @keyframes SpotBody {
  from {
      transform: translateY(0)
    }
    to {
      transform: translateY(-50px)
    }
  }

  @keyframes SpotLeg1Top {
    from {
      transform: translateY(0) rotate(-20deg)
    }
    to {
      transform: translateY(-60px) rotate(-30deg)
    }
  }

  @keyframes SpotLeg1Bottom {
    from {
      transform: translateY(0) rotate(6deg)
    }
    to {
      transform: translateY(-40px) rotate(30deg)
    }
  }

  @keyframes SpotLeg2Top {
    from {
      transform: translateY(0) rotate(-14deg)
    }
    to {
      transform: translateY(-40px) rotate(-20deg)
    }
  }

  @keyframes SpotLeg2Bottom {
    from {
      transform: translateY(0) rotate(9deg)
    }
    to {
      transform: translateY(-30px) rotate(28deg)
    }
  }

   @keyframes SpotLeg3Top {
    from {
      transform: translateY(0) rotate(-17deg)
    }
    to {
      transform: translateY(-35px) rotate(-12deg)
    }
  }

  @keyframes SpotLeg3Bottom {
    from {
      transform: translateY(0) rotate(9deg)
    }
    to {
      transform: translateY(-50px) rotate(40deg)
    }
  }

  @keyframes SpotLeg4Top {
    from {
      transform: translateY(0) rotate(-20deg)
    }
    to {
      transform: translateY(-60px) rotate(-30deg)
    }
  }

  @keyframes SpotLeg4Bottom {
    from {
      transform: translateY(0) rotate(11deg)
    }
    to {
      transform: translateY(-45px) rotate(35deg)
    }
  }


  .spot {
    position: relative;
    width: 395px;
    height: 223px;
    margin: 0 auto;
  }

  @media screen and (max-width: 570px) {
    .spot {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 360px) {
    .spot {
      transform: scale(0.5) translateX(-60px);
    }
  }

  .spot > img {
    display: block;
    position: absolute;
    animation-delay: 0.4s;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  .spot-body {
    width: 320px;
    bottom: 67px;
    left: calc(50% - 160px);
    z-index: 2;
  }

  .animated .spot-body {
    animation-name: SpotBody;
  }

  .spot-leg1-top {
    width: 162.5px;
    bottom: 78px;
    left: -55px;
    transform-origin: 100% 100%;
    transform: rotate(-20deg);
    z-index: 4;
  }

  .animated .spot-leg1-top {
    animation-name: SpotLeg1Top;
  }

  .spot-leg1-bottom {
    width: 151px;
    bottom: 28px;
    left: -35px;
    transform-origin: 0 0;
    transform: rotate(6deg);
    z-index: 3;
  }

  .animated .spot-leg1-bottom {
    animation-name: SpotLeg1Bottom;
  }


  .spot-leg2-top {
    width: 118.5px;
    bottom: 80px;
    left: -45px;
    transform-origin: 100% 100%;
    transform: rotate(-14deg);
    z-index: 1;
  }

  .animated .spot-leg2-top {
    animation-name: SpotLeg2Top;
  }

  .spot-leg2-bottom {
    width: 142.5px;
    bottom: 46px;
    left: -37px;
    transform-origin: 0 0;
    transform: rotate(9deg);
    z-index: 0;
  }

  .animated .spot-leg2-bottom {
    animation-name: SpotLeg2Bottom;
  }

  .spot-leg3-top {
    width: 143px;
    bottom: 80px;
    left: 186px;
    transform-origin: 100% 100%;
    transform: rotate(-17deg);
    z-index: 0;
  }

  .animated .spot-leg3-top {
    animation-name: SpotLeg3Top;
  }

  .spot-leg3-bottom {
    width: 142.5px;
    bottom: 35px;
    left: 188px;
    transform-origin: 0 0;
    transform: rotate(9deg);
    z-index: 1;
  }

  .animated .spot-leg3-bottom {
    animation-name: SpotLeg3Bottom;
  }

  .spot-leg4-top {
    width: 158px;
    bottom: 80px;
    left: 166px;
    transform-origin: 100% 100%;
    transform: rotate(-20deg);
    z-index: 4;
  }

  .animated .spot-leg4-top {
    animation-name: SpotLeg4Top;
  }

  .spot-leg4-bottom {
    width: 153.5px;
    bottom: 28px;
    left: 188px;
    transform-origin: 0 0;
    transform: rotate(11deg);
    z-index: 1;
  }

  .animated .spot-leg4-bottom {
    animation-name: SpotLeg4Bottom;
  }
  


  .screen {
    box-sizing: border-box;
    height:100vh;
    position: relative;
    padding-left: var(--space);
    padding-right: var(--space);
  }

  .screen-dark {
    color: #fff;
  }

  .screen-dark a {
    color: #fff;
  }


  

  .screen-video:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(56, 71, 140, 0.3);
    backdrop-filter: blur(3px);
  }

  .screen-video > video {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .screen-content {
    position: relative;
    z-index: 1;
    height: 100%;
  }




  .intro {
    display: grid;
    grid-template-rows: minmax(0, 0.4fr) minmax(0, 1fr) minmax(0, 0.4fr);
    align-items: stretch;

    text-align: center;
  }

  .intro h1 {
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 6rem;
    line-height: 1.2;
  }

  .intro h1 span {
    display: block;
    font-size: 40%;
  }

  .intro h2 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  .intro form {

    /* backdrop-filter: blur(3px);
    background-image: radial-gradient(
      #fff2dfd8 6%,
      #ffdee0c4 20%,
      #c1d5f3c4
    ); */

    /* color: #000; */
    color: #fff;
    padding: var(--space);
    border-radius: calc(var(--space)*3);

    max-width: 500px;
    margin-top: var(--space)
  }

  .intro form > div {
    margin-bottom: var(--space);
  }

  .intro form input {
    padding: var(--space);
    font-size: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.664);

    font-weight: bold;
    transition: 0.2s ease all;
  }

  .intro form input:not([type='checkbox']){
    display: block;
    width: 100%;
  }

  input:not([type='submit']) {
    background-color: rgba(255, 255, 255, 0.247);
    text-align: center;
    color: #fff;
  }

  .intro form input[type='email']:focus {
    border-color: #fff;
  }

  .intro form input[type='email']::placeholder {
    color: #fff;
  }

  .intro form input[type='email']:focus::placeholder {
    color: rgba(255, 255, 255, 0.473)
  }

  .intro form input[type='checkbox'] {
    appearance: none;
    cursor: pointer;
    width: 0.5rem;
    height: 0.5rem;
    position: relative;

    margin-right: var(--space);
  }

  .intro form input[type='checkbox']:checked {
    /* background-color: rgba(255, 255, 255, 0.705); */
    background-color: yellowgreen;
    border-color: yellowgreen
  }

  .intro form input[type='checkbox']:checked:after {
    content:"✓";
    position: absolute;
    top: 0.1rem;
    left: 0.3rem;
    color: #fff
  }

  .intro form input[type='submit'] {
    appearance: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
    background-color: var(--color-yellow);
    border: 1px solid var(--color-yellow-dark)
  }

  .intro form input[type='submit']:hover {
    background-color: var(--color-yellow-light);
  }

  .submition-complete {
    color: var(--color-yellow);
    text-shadow: 1px 1px 0 #000;
  }

  .intro form.status-wait {
    position: relative;
  }

  .intro form.status-wait * {
    opacity: 0.6;
  }

  @keyframes bounceLoader {
    0{
      transform: translateY(-1rem);
    }
    50%{
      transform: translateY(1rem) scaleY(0.8);
    }
    100%{
      transform: translateY(-1rem);
    }
  }

  .intro form.status-wait:after {
    content: "";
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: var(--color-yellow);
    transform: translateY(-1rem);
    animation: bounceLoader 1s ease infinite;
  }





  .intro .highlights {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space);
    list-style: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  /* for Accessibility - to spell screen readers unordered list*/
  .intro .highlights li::before {
    content: "\200B";
  }

  .intro .highlights span {
    display: block;
  }




  .intro .part-1 {
    padding-top: calc(var(--space)*2);
    padding-bottom: var(--space);
  }

  .intro .part-2 {
    padding-top: var(--space);
    padding-bottom: calc(var(--space) * 3);
  }

  .intro .part-3 {
    align-self: end;
    padding-top: var(--space);
    padding-bottom: calc(var(--space)*3);
  }






  @media screen and (max-width: 900px) {
    .intro h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .intro h1 {
      font-size: 3rem;
    }

    .intro h2 {
      font-size: 1.4rem;
    }

    .intro .highlights {
      grid-template-columns: minmax(0, 1fr);
    }

    .highlights span {
      display: inline;
    }
  }

  @media screen and (max-height: 750px) {
    .intro .part-2 {
      padding-top: calc(var(--space)*4);
    }

    .intro {
      display: block;
      height: auto;
    }

    .intro h1 {
      margin-bottom: var(--space);
    }

  }

</style>
<script>
  import { onMount } from 'svelte';
  import { lazyload } from '../lib/lazyload.js';
  import { base } from '../lib/base.js';

  let showBefore = true;
  let headerEl;
  let height = '100vh';
  let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 768;

  $: splashSize = windowWidth >= 1024 ? 'web' : windowWidth >= 640 ? 'tablet' : 'phone';
  $: beforeStyle = `background-image: url('${base}images/skyline-before-${splashSize}.jpg')`;
  $: afterStyle  = `background-image: url('${base}images/skyline-after-${splashSize}.jpg')`;

  function updateHeight() {
    height = `${window.innerHeight - 40}px`;
  }

  onMount(() => {
    updateHeight();
    const onResize = () => { updateHeight(); windowWidth = window.innerWidth; };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  });
</script>

<header class="header-wrap" bind:this={headerEl} style="height: {height}">
  <div class="splash-image" class:visible={showBefore} style={beforeStyle}></div>
  <div class="splash-image" class:visible={!showBefore} style={afterStyle}></div>

  <div class="title">
    <h1>Weegee</h1>
    <h3>New York City</h3>
    <p>A new book of photos by the legendary New York photographer shows the industrialized, pre-gentrified city of the mid-20th century.</p>
    <button class="splash-button" on:click={() => showBefore = !showBefore}>Change</button>
  </div>

  <button class="splash-button mobile-btn" on:click={() => showBefore = !showBefore}>Change</button>
</header>

<p class="splash-caption">A 1940 photo of Lower Manhattan, shot from across the river near the Brooklyn Bridge. (Copyright Weegee/The International Center of Photography)</p>

<style>
  .header-wrap {
    position: relative;
    overflow: hidden;
  }

  .splash-image {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.4s linear;
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
  }

  .splash-image.visible {
    opacity: 1;
  }

  .title {
    color: #efefef;
    font-family: 'GoodComp-Book', serif;
    font-size: 3.25em;
    margin: 7% 5%;
    max-width: 500px;
    position: absolute;
    text-align: center;
    text-shadow: 1px 1px 1px #343434;
    z-index: 10;
  }

  .title h1 {
    font-size: 1.25em;
    letter-spacing: 0.02em;
  }

  .title h3 {
    font-size: 0.425em;
    margin: 0;
    text-transform: uppercase;
  }

  .title p {
    font-family: 'GoodWeb-Book', sans-serif;
    font-size: 0.35em;
    line-height: 1.25em;
    margin-top: 0.65em;
  }

  .title .splash-button {
    display: none;
  }

  .splash-button {
    border: 3px solid #efefef;
    border-radius: 5px;
    bottom: 30px;
    color: #efefef;
    cursor: pointer;
    background: transparent;
    display: inline-block;
    font-family: 'GoodWeb-Book', sans-serif;
    font-size: 0.5em;
    font-weight: 800;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 10px 8px 10px;
    position: absolute;
    text-transform: uppercase;
    z-index: 10;
  }

  .splash-button:hover,
  .splash-button:active {
    background: #efefef;
    color: #333;
  }

  .splash-caption {
    font-size: 0.8em;
    font-weight: 400;
    color: #888;
    line-height: 1.3em;
    margin: 5px;
    text-align: right;
  }

  @media screen and (min-width: 480px) {
    .title {
      margin: 5%;
    }

    .title h1 {
      font-size: 1.5em;
    }

    .title h3 {
      font-size: 0.5em;
    }

    .title p {
      font-size: 0.5em;
    }

    .splash-button {
      bottom: 50px;
      font-size: 0.75em;
    }
  }

  @media screen and (min-width: 640px) {
    .title {
      margin-top: 5%;
      max-width: 550px;
    }

    .title h1 {
      font-size: 2.8em;
      letter-spacing: 0.02em;
    }

    .title h3 {
      font-size: 0.65em;
    }

    .title p {
      line-height: 1.15em;
      padding: 0 5%;
    }

    .title .splash-button {
      display: inline-block;
      position: relative;
      bottom: auto;
      left: auto;
      transform: none;
      font-size: 0.25em;
    }

    .mobile-btn {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .title {
      max-width: 525px;
    }
  }
</style>

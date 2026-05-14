<script>
  import { lazyload } from '../lib/lazyload.js';
  import { base } from '../lib/base.js';

  let showBefore = true;

  let timesBuildingBeforeLoaded = false;
  let timesBuildingAfterLoaded = false;
  let garmentBeforeLoaded = false;
  let garmentAfterLoaded = false;

  function toggle() {
    showBefore = !showBefore;
  }
</script>

<div class="media-wrap media-no-column">
  <header>
    <!-- Times Building: desktop only -->
    <div class="embed-left web-view">
      <img class="locator" src="{base}images/placeholder.png" use:lazyload={`${base}images/maps/times-building.jpg`} alt="Times Building" />
      <div class="text-block">
        <h4 class="location">Times Building</h4>
        <p class="dates">One Times Square</p>
        <p class="description">The spire on the roof of One Times Square is still used for the New Year's Eve ball drop.</p>
      </div>
    </div>

    <!-- Garment District: always visible -->
    <div class="embed-right">
      <img class="locator" src="{base}images/placeholder.png" use:lazyload={`${base}images/maps/garment-district.jpg`} alt="Garment District" />
      <div class="text-block">
        <h4 class="location">Garment district</h4>
        <p class="dates">8th Ave and West 35th St</p>
        <p class="description">Along 8th Avenue in the garment district many buildings remain largely unchanged from Weegee's time.</p>
      </div>
    </div>

    <div class="clearfix"></div>
  </header>

  <!-- Times Building pair: desktop only -->
  <div class="media embed-left web-view" on:click={toggle}>
    <img
      class="after-img"
      src="{base}images/placeholder-small.jpg"
      use:lazyload={`${base}images/ba-times-building-after-full.jpg`}
      alt="Times Building after"
      on:load={() => timesBuildingAfterLoaded = true}
      class:img-loaded={timesBuildingAfterLoaded}
    />
    <img
      class="before-img"
      src="{base}images/placeholder-small.jpg"
      use:lazyload={`${base}images/ba-times-building-before-full.jpg`}
      alt="Times Building before"
      on:load={() => timesBuildingBeforeLoaded = true}
      class:img-loaded={timesBuildingBeforeLoaded}
      class:visible={showBefore}
    />
  </div>

  <!-- Garment District pair: always visible -->
  <div class="media embed-right" on:click={toggle}>
    <img
      class="after-img"
      src="{base}images/placeholder-small.jpg"
      use:lazyload={`${base}images/ba-garment-district-after-full.jpg`}
      alt="Garment district after"
      on:load={() => garmentAfterLoaded = true}
      class:img-loaded={garmentAfterLoaded}
    />
    <img
      class="before-img"
      src="{base}images/placeholder-small.jpg"
      use:lazyload={`${base}images/ba-garment-district-before-full.jpg`}
      alt="Garment district before"
      on:load={() => garmentBeforeLoaded = true}
      class:img-loaded={garmentBeforeLoaded}
      class:visible={showBefore}
    />
  </div>

  <div class="clearfix"></div>
  <button class="before-after-button" on:click={toggle}>Change</button>
  <p class="credit" class:visible={showBefore}>Copyright Weegee/The International Center of Photography</p>
  <p class="credit" class:visible={!showBefore}>AP Photo/Mark Lennihan</p>
  <div class="clearfix"></div>
</div>

<style>
  .media-no-column {
    margin: 18% 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    width: 95%;
    position: relative;
  }

  header {
    margin-bottom: 1em;
    position: relative;
  }

  .locator {
    float: right;
    margin: 0 0 5px 6px;
    max-height: 150px;
    max-width: 150px;
    width: 40%;
  }

  .location {
    font-family: 'GoodComp-Book', serif;
    font-size: 1.25em;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .dates {
    color: #d2d2d2;
    font-size: 0.75em;
    margin: 0;
  }

  .description {
    font-size: 0.8125em;
    margin: 10px 0 -3px 0;
    max-width: 600px;
    color: #555;
  }

  .media {
    position: relative;
    cursor: pointer;
    margin-bottom: 2%;
  }

  .after-img,
  .before-img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.5s linear;
    box-shadow: 1px 1px 1px #d2d2d2;
  }

  .after-img.img-loaded {
    opacity: 1;
  }

  .before-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .before-img.img-loaded.visible {
    opacity: 1;
  }

  .before-after-button {
    border: 3px solid #333;
    border-radius: 5px;
    background: transparent;
    color: #333;
    cursor: pointer;
    float: left;
    font-family: 'GoodWeb-Book', sans-serif;
    font-size: 0.8em;
    font-weight: 800;
    margin-top: 5px;
    margin-right: 10px;
    padding: 10px 10px 8px 10px;
    text-transform: uppercase;
  }

  .before-after-button:hover {
    background: #333;
    color: #efefef;
  }

  .credit {
    display: none;
    font-size: 0.7em;
    color: #bbb;
    text-align: right;
    line-height: 1.3em;
    margin: 5px 0 0 0;
  }

  .credit.visible {
    display: block;
  }

  /* web-view is in global app.css */

  @media screen and (min-width: 480px) {
    .locator {
      float: left;
      margin: 0;
      width: 100%;
      max-width: 150px;
    }

    .text-block {
      position: absolute;
      bottom: 0;
      left: 160px;
    }
  }

  @media screen and (min-width: 640px) {
    .media-no-column {
      margin: 8% auto;
    }

    .embed-left,
    .embed-right {
      float: left;
      position: relative;
      width: 49%;
    }

    .embed-right {
      float: right;
    }

    .locator {
      float: left;
      margin-right: 1em;
      max-height: 165px;
      max-width: 165px;
    }

    .text-block {
      position: absolute;
      bottom: 0;
      left: 175px;
    }

    .dates {
      margin-bottom: 1em;
    }

    .media {
      margin-bottom: 6px;
    }
  }
</style>

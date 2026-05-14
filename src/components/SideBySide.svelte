<script>
  import { lazyload } from '../lib/lazyload.js';
  import { base } from '../lib/base.js';

  export let beforeSrc;
  export let afterSrc;
  export let placeholder = `${import.meta.env.BASE_URL}images/placeholder-tall.jpg`;
  export let credit = '';
  export let map = '';
  export let location = '';
  export let address = '';
  export let description = '';

  let beforeLoaded = false;
  let afterLoaded = false;
</script>

<div class="media-wrap media-no-column">
  <header>
    {#if map}
      <img class="locator" src="{base}images/placeholder.png" use:lazyload={map} alt={location} />
    {/if}
    <div class="text-block">
      <h4 class="location">{location}</h4>
      {#if address}<p class="dates">{address}</p>{/if}
      {#if description}<p class="description">{description}</p>{/if}
    </div>
    <div class="clearfix"></div>
  </header>

  <div class="media embed-left">
    <img
      src={placeholder}
      use:lazyload={beforeSrc}
      alt="Before"
      on:load={() => beforeLoaded = true}
      class:img-loaded={beforeLoaded}
    />
  </div>
  <div class="media embed-right">
    <img
      src={placeholder}
      use:lazyload={afterSrc}
      alt="After"
      on:load={() => afterLoaded = true}
      class:img-loaded={afterLoaded}
    />
  </div>

  <div class="clearfix"></div>
  {#if credit}<p class="credit">{credit}</p>{/if}
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
    margin-bottom: 2%;
  }

  .media img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 1;
  }

  .credit {
    font-size: 0.7em;
    color: #bbb;
    text-align: right;
    line-height: 1.3em;
    margin: 5px 0 0 0;
  }

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

    .locator {
      margin-right: 1em;
      max-height: 165px;
      max-width: 165px;
    }

    .text-block {
      left: 175px;
    }

    .dates {
      margin-bottom: 1em;
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

    .media {
      margin-bottom: 6px;
    }
  }
</style>

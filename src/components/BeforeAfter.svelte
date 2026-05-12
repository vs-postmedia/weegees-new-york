<script>
  import { lazyload } from '../lib/lazyload.js';

  export let beforeSrc;
  export let afterSrc;
  export let placeholder = '/images/placeholder.png';
  export let beforeCredit = '';
  export let afterCredit = '';
  export let beforeCaption = '';
  export let afterCaption = '';
  export let map = '';
  export let location = '';
  export let address = '';
  export let description = '';

  let showBefore = true;
  let beforeLoaded = false;
  let afterLoaded = false;

  function toggle() {
    showBefore = !showBefore;
  }
</script>

{#if location}
  <header>
    {#if map}
      <img class="locator" src="/images/placeholder.png" use:lazyload={map} alt={location} />
    {/if}
    <div class="text-block">
      <h4 class="location">{location}</h4>
      {#if address}<p class="dates">{address}</p>{/if}
      {#if description}<p class="description">{description}</p>{/if}
    </div>
    <div class="clearfix"></div>
  </header>
{/if}

<div class="media embed-full" on:click={toggle}>
  <!-- after image stays in flow to set container height -->
  <img
    class="after-img"
    src={placeholder}
    use:lazyload={afterSrc}
    alt="After"
    on:load={() => afterLoaded = true}
    class:img-loaded={afterLoaded}
  />
  <!-- before image is absolutely positioned on top -->
  <img
    class="before-img"
    src={placeholder}
    use:lazyload={beforeSrc}
    alt="Before"
    on:load={() => beforeLoaded = true}
    class:img-loaded={beforeLoaded}
    class:visible={showBefore}
  />
</div>

<button class="before-after-button" on:click={toggle}>Change</button>

{#if beforeCaption || afterCaption}
  <p class="caption" class:visible={showBefore}>{beforeCaption}</p>
  <p class="caption" class:visible={!showBefore}>{afterCaption}</p>
{/if}
{#if beforeCredit || afterCredit}
  <p class="credit" class:visible={showBefore}>{beforeCredit}</p>
  <p class="credit" class:visible={!showBefore}>{afterCredit}</p>
{/if}

<div class="clearfix"></div>

<style>
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

  .credit,
  .caption {
    display: none;
    font-size: 0.7em;
    color: #bbb;
    line-height: 1.3em;
    margin: 5px 0 0 0;
  }

  .credit {
    text-align: right;
  }

  .credit.visible,
  .caption.visible {
    display: block;
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
  }
</style>

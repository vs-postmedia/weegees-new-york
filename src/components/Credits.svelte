<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  const dispatch = createEventDispatcher();
</script>

<section class="credits" transition:fade={{ duration: 400 }} on:click={() => dispatch('close')}>
  <div class="column layout-narrow" on:click|stopPropagation>
    <button class="close-button" on:click={() => dispatch('close')} aria-label="Close credits"></button>

    <h1>Published</h1>
    <p>March 28, 2015</p>

    <h1>Interactive</h1>
    <p>Nathan Griffiths</p>

    <h1>Reporting</h1>
    <p>Beth Harpaz</p>

    <h1>Photos</h1>
    <p>Weegee</p>
    <p>Mark Lennihan</p>

    <h1>Sources</h1>
    <p>The Associated Press</p>
    <p>Weegee/The International Center of Photography</p>
    <p>Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</p>

    <div class="credits-footer">
      <p>AP Interactive content shall not be republished or reused directly or indirectly in any medium. Users may not download or reproduce a substantial portion of the AP material in this interactive.</p>
      <a href="http://hosted2.ap.org/APDEFAULT/Privacy" target="_blank" rel="noopener">PRIVACY POLICY</a>
      <a href="http://www.ap.org/company/Terms-conditions" target="_blank" rel="noopener">AP TERMS &amp; CONDITIONS</a>
      <p>Copyright, 2014, Associated Press</p>
    </div>
  </div>
</section>

<style>
  .credits {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background-color: #fafafa;
    top: 0;
    left: 0;
  }

  .credits .column {
    position: relative;
    height: 94%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 40px 0;
    width: 95%;
    max-width: 640px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'GoodWeb-Bold', sans-serif;
    font-size: 1.6em;
    color: #444;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    font-size: 1em;
    color: #555;
  }

  a {
    display: block;
    margin: 20px 0;
    color: #333;
  }

  .credits-footer {
    margin-top: 40px;
  }

  .credits-footer p {
    margin: 20px 0;
  }

  .close-button {
    background: url('/images/close-button.png') no-repeat center;
    background-size: contain;
    height: 40px;
    width: 40px;
    border: none;
    cursor: pointer;
    opacity: 1;
    position: absolute;
    top: 40px;
    right: 2%;
    transition: opacity 0.35s ease;
  }

  .close-button:hover {
    opacity: 0.6;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import { base } from '../lib/base.js';
  const dispatch = createEventDispatcher();
</script>

<nav>
  <div class="slug">
    <a href="https://www.ap.org/" title="Sources & credits" on:click|preventDefault={() => dispatch('openCredits')}>
      <img src="{base}images/ap-logo.jpg" alt="AP" />
    </a>
    <h1>Weegee's New York</h1>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: #111;
    border-bottom: 1px solid #333;
    z-index: 999;
  }

  .slug {
    position: fixed;
    left: 3%;
    display: flex;
    align-items: center;
    height: 40px;
  }

  .slug a {
    display: flex;
    align-items: center;
  }

  .slug img {
    height: 45px;
    width: auto;
  }

  .slug h1 {
    color: #eee;
    display: inline-block;
    font-family: 'GoodWeb-Book', sans-serif;
    font-weight: 200;
    font-size: 1.1125em;
    margin: 0 0 0 10px;
    text-transform: uppercase;
    vertical-align: bottom;
  }

  @media screen and (min-width: 500px) {
    .slug {
      left: 5%;
    }

    .slug h1 {
      font-size: 1.2125em;
    }
  }
</style>

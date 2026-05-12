<script>
  import Nav from './components/Nav.svelte';
  import Header from './components/Header.svelte';
  import BeforeAfter from './components/BeforeAfter.svelte';
  import SideBySide from './components/SideBySide.svelte';
  import DoublePanel from './components/DoublePanel.svelte';
  import Credits from './components/Credits.svelte';

  let creditsOpen = false;
</script>

<Nav on:openCredits={() => creditsOpen = true} />

<article id="main">
  <Header />

  <section class="content">
    <!-- Intro: derelict + body text + empire state, all in column -->
    <div class="column">
      <div class="media-wrap embed-single-right embed-single-first">
        <BeforeAfter
          beforeSrc="/images/ba-derelict-before-full.jpg"
          afterSrc="/images/ba-derelict-after-full.jpg"
          placeholder="/images/placeholder-tall.jpg"
          beforeCaption={'Weegee\'s 1945 photo "Derelict sleeping on the sidewalk outside police headquarters."'}
          afterCaption="The same sidewalk today. (AP Photo/Mark Lennihan)"
        />
      </div>

      <p><span class="drop-cap">W</span>eegee, whose real name was Arthur Fellig, was famous for sensational but artfully composed black-and-white pictures of crime scenes, fires and other urban mayhem. "The Weegee Guide to New York," a book of Weegee's New York photography compiled by the International Center of Photography, includes a few of those tabloid-worthy images of bodies sprawled on the pavement. But most of the book's photos show ordinary neighborhoods and streetscapes with low-rise buildings, bulky cars, empty skies and remarkably uncluttered public spaces.</p>

      <p>"The classic New York skyline has changed dramatically since Weegee's day, and the flurry of often mundane building construction over the last decades has obscured many of New York's iconic skyscrapers," said Philomena Mariani, director of publications at the International Center of Photography, who compiled the book with another ICP staff member, Christopher George.</p>

      <p>ICP owns 20,000 Weegee images, but for this book, Mariani said, "we were looking for pictures that showed something of New York's built environment and public life," including images of crowds gathered for celebrations and shoppers waiting for rationed goods.</p>

      <p>Mariani said she hopes the book will get people thinking not only about "how different the urban landscape is physically," but also about "the public life that existed through the mid-20th century that Weegee captured."</p>

      <div id="empire-state" class="media-wrap">
        <BeforeAfter
          beforeSrc="/images/ba-empire-state-before-full.jpg"
          afterSrc="/images/ba-empire-state-after-full.jpg"
          map="/images/maps/empire-state.jpg"
          location="Empire State Building"
          address="Sixth Ave and West 43rd St"
          description="The Empire State Building – the world's tallest building at the time of Weegee's 1943 photo – can be seen across Bryant Park in Midtown."
          beforeCredit="Copyright Weegee/The International Center of Photography"
          afterCredit="AP Photo/Mark Lennihan"
        />
      </div>
    </div>

    <!-- Theatre district: full-width side by side -->
    <SideBySide
      beforeSrc="/images/ba-theatre-marquis-before-full.jpg"
      afterSrc="/images/ba-theatre-marquis-after-full.jpg"
      placeholder="/images/placeholder-tall.jpg"
      map="/images/maps/theatre-district.jpg"
      location="Theatre district"
      address="West 42nd St and 7th Ave"
      description="In Weegee's 1953 photo, Humphrey Bogart films show on the marquee of the Victory movie theater, home now to the New Victory, which specializes in children's entertainment."
      credit="Copyright Weegee/The International Center of Photography, AP Photo/Mark Lennihan"
    />

    <!-- Victory: in column -->
    <div class="column">
      <div class="media-wrap">
        <BeforeAfter
          beforeSrc="/images/ba-victory-before-full.jpg"
          afterSrc="/images/ba-victory-after-full.jpg"
          map="/images/maps/mott.jpg"
          location="Victory"
          address="63 Mott St, Chinatown"
          description="Residents in the entrance to an apartment building that has remained largely unchanged since Weegee's time."
          beforeCredit="Copyright Weegee/The International Center of Photography"
          afterCredit="AP Photo/Mark Lennihan"
        />
      </div>
    </div>

    <!-- Times Building + Garment District: double panel -->
    <DoublePanel />

    <!-- Fort Greene: full-width side by side -->
    <SideBySide
      beforeSrc="/images/ba-fort-greene-before-full.jpg"
      afterSrc="/images/ba-fort-greene-after-full.jpg"
      placeholder="/images/placeholder-tall.jpg"
      map="/images/maps/fort-greene.jpg"
      location="Fort Greene, Brooklyn"
      address="Fort Greene Place and Hanson Place"
      description="Weegee's 1943 photo 'Wartime rationing: retail butchers await arrival of meat' was shot looking towards Atlantic Avenue near what is now the Barclay's Center in Brooklyn."
      credit="Copyright Weegee/The International Center of Photography, AP Photo/Mark Lennihan"
    />

    <!-- Times Square: in column -->
    <div class="column">
      <div class="media-wrap">
        <BeforeAfter
          beforeSrc="/images/ba-times-square-before-full.jpg"
          afterSrc="/images/ba-times-square-after-full.jpg"
          map="/images/maps/times-square.jpg"
          location="Times Square"
          address="Broadway and West 45th St"
          description="Neon billboards on Times Square. A marquee on the left of Weegee's 1957 photo advertises the travelogue film 'Search for Paradise'."
          beforeCredit="Copyright Weegee/The International Center of Photography"
          afterCredit="AP Photo/Mark Lennihan"
        />
      </div>
    </div>
  </section>
</article>

{#if creditsOpen}
  <Credits on:close={() => creditsOpen = false} />
{/if}

<style>
  .content {
    padding: 40px 0;
  }

  .column {
    width: 95%;
    max-width: 640px;
    margin: 0 auto;
  }

  .column :global(p) {
    font-size: 1em;
    font-weight: 200;
    color: #555;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    margin: 7% auto;
  }

  .column :global(p:last-of-type) {
    padding-bottom: 3em;
  }

  .drop-cap {
    font-family: Georgia, serif;
    font-size: 7em;
    color: #aaa;
    float: left;
    line-height: 80px;
    margin-left: -7px;
    margin-top: -5px;
    padding: 13px 4px 0 0;
  }

  .media-wrap {
    margin: 18% 0;
    position: relative;
  }

  /* Derelict float: right on desktop, normal flow on mobile */
  .embed-single-right {
    max-width: 360px;
    width: 100%;
  }

  .embed-single-first {
    margin-top: 5px;
  }

  @media screen and (min-width: 640px) {
    .content {
      padding: 80px 0;
    }

    .column :global(p) {
      font-size: 1.125em;
      margin: 2% auto;
      text-align: left;
    }

    .column :global(p:last-of-type) {
      padding-bottom: 4em;
    }

    .media-wrap {
      margin: 8% 0;
    }

    .embed-single-right {
      float: right;
      margin: 5px 0 20px 20px;
      width: 49%;
    }
  }
</style>

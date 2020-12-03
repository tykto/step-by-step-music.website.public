<script type="ts">
  import Footer from './footer.svelte';
  import Heading from './heading.svelte';
  import Jumbotron from './jumbotron.svelte';
  import Nav from './nav.svelte';

  export let active = null;
  export let jumbotronUrl = null;
  export let heading = null;
</script>

<style>
  .container-fluid {
    margin-top: -50px;
  }
</style>

<Nav {active} />
<Jumbotron backgroundUrl={jumbotronUrl} />
<div class="container-fluid">
  <Heading>{heading}</Heading>
  <div class="container">
    <slot />
  </div>
</div>
<Footer />

<script type="ts">
  import Footer from '$lib/ui.components/Footer';
  import Heading from '$lib/ui.components/Heading';
  import Jumbotron from '$lib/ui.components/Jumbotron';
  import Nav from '$lib/ui.components/Nav';

  export let active = null;
  export let bgClass = null;
  export let heading = null;
</script>

<Nav {active} />
<Jumbotron {bgClass} />
<div class="flex-1">
  <Heading>{heading}</Heading>
  <div class="w-11/12 md:w-3/4 lg:w-4/5 2xl:w-3/5 mx-auto">
    <slot />
  </div>
</div>
<Footer />

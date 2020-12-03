<script type="ts">
  import Footer from '@app/components/Footer';
  import Heading from '@app/components/Heading';
  import Jumbotron from '@app/components/Jumbotron';
  import Nav from '@app/components/Nav';

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

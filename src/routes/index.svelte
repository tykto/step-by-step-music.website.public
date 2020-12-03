<script type="ts">
  import Nav from './_components/nav.svelte';
  import Jumbotron from './_components/jumbotron.svelte';
  import Heading from './_components/heading.svelte';
  import Content from './_components/content.svelte';
</script>

<style>
</style>

<svelte:head>
  <meta name="description" content="Step by Step Music" />
  <meta
    name="keywords"
    content="music, education, guitar, piano, voice, music tuition, violin, drums, guitar teacher, piano teacher, singing, singing teacher, drum teacher" />
  <meta name="robots" content="index,follow" />
  <title>Step by Step Music</title>
</svelte:head>

<Nav />
<Jumbotron />
<div class="container-fluid t-content">
  <Heading />
  <Content />
</div>
<div id="footer">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 t-contact">
        <p>0404808861</p>
        <p>info@stepbystepmusic.education</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 t-info">
        <p class="t-copy">&copy; 2016 Step By Step Music</p>
        <p><a class="t-credit" href="http://www.tykto.com" target="_blank">Website by Tykto</a></p>
      </div>
    </div>
  </div>
</div>

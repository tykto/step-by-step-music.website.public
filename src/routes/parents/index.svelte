<script type="ts">
  import Nav from '../_components/nav.svelte';
  import Jumbotron from './_components/jumbotron.svelte';
  import Heading from '../_components/heading.svelte';
  import Content from './_components/content.svelte';
  import Footer from '../_components/footer.svelte';
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

<Nav active="parents" />
<Jumbotron />
<div class="container-fluid t-content">
  <Heading>PARENTS</Heading>
  <Content />
</div>
<Footer />

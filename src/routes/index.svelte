<script type="ts">
  import Page from '../components/page.svelte';
  import jumbotronUrl from './jumbotron.jpg';
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

<Page heading="WELCOME" {jumbotronUrl}>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h3>Welcome!</h3>
      <p>Step By Step Music offers instrumental music lessons at a number of Victorian primary schools.</p>
      <p>
        Our aim is to unlock the musical potential of each and every one of our students, and to prepare them for a lifelong love of music. As countless studies
        have found, the musical education that an individual receives as a child has a massive impact on their intellectual, academic and social development
        throughout their life.
      </p>
    </div>
  </div>
</Page>

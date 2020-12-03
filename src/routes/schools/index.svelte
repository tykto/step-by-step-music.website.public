<script type="ts">
  import Page from '../../components/page.svelte';
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

<Page heading="SCHOOLS" active="schools" {jumbotronUrl}>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h3>Step By Step For Your School</h3>
      <p>
        Step By Step Music is all about growing together through win-win situations. The right instrumental music program can enhance a schools’ reputation and
        become a drawcard for prospective parents.
      </p>
      <p>
        We employ dynamic and experienced teachers that are performers in their own right. It is not enough to ‘teach’ children the physicality of playing an
        instrument, they must also be inspired and challenged by a positive role model that they relate to, and our teachers are selected for this purpose.
      </p>
      <p>
        Step By Step Music integrate and work around the school specialist timetable and events. We encourage students to perform regularly at school
        assemblies, open nights, Christmas concerts etc, as well as facilitating instrumental performance nights.
      </p>
    </div>
  </div>
</Page>

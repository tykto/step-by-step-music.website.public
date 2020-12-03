<script type="ts">
  import Page from '@app/components/Page';
  import jumbotronUrl from './jumbotron.jpg';
</script>

<style>
  .row {
    padding-top: 20px;
  }
</style>

<svelte:head>
  <meta name="description" content="Step by Step Music" />
  <meta
    name="keywords"
    content="music, education, guitar, piano, voice, music tuition, violin, drums, guitar teacher, piano teacher, singing, singing teacher, drum teacher" />
  <meta name="robots" content="index,follow" />
  <title>Step by Step Music</title>
</svelte:head>

<Page heading="PARENTS" active="parents" {jumbotronUrl}>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <h3>Step By Step For Your Child</h3>
      <p>
        Step By Step Music offers Instrumental Music lessons at a number of schools. What is our greatest selling point? Apart from employing highly
        professional teachers that nurture the musical development of their students in an encouraging and positive environment, the lessons are during school
        hours. This saves families all that extra running around afterschool taxiing children to lessons. Also because the lessons are at school, it gives the
        children opportunities to perform at assemblies and other events to show off what all they have learned.
      </p>
    </div>
  </div>
</Page>

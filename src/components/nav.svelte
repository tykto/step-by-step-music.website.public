<script type="ts">
  export let active = null;
</script>

<style>
</style>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar" />
        <span class="icon-bar" />
        <span class="icon-bar" />
      </button>
      <a class="navbar-brand text-hide" href="/">Step by Step Music</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class:active={active === 'schools'}><a href="schools">SCHOOLS</a></li>
        <li class:active={active === 'parents'}><a href="parents">PARENTS</a></li>
        <li class:active={active === 'contact'}><a href="contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

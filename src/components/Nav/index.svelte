<script type="ts">
  import guitarUrl from './guitar.png';
  import logoUrl from './logo.png';
  export let active = null;
</script>

<style>
  .navbar {
    border-radius: 0;
    border: none;
  }

  .navbar-default {
    background: #333333;
  }

  .navbar-brand {
    background: var(--logo-url) no-repeat;
    padding: 0px;
    height: 85px;
    width: 185px;
  }

  .navbar .navbar-collapse {
    border: none;
    box-shadow: none;
  }

  .navbar-default .navbar-toggle {
    border: none;
  }

  .navbar-default .navbar-toggle:hover,
  .navbar-default .navbar-toggle:focus {
    background: rgba(177, 0, 28, 0.2);
    border: none;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #b1001c;
  }

  .navbar-default .navbar-nav > li > a {
    font-family: 'chanticleer_roman_nfregular';
    color: #ffffff;
    font-size: 18px;
    font-weight: normal;
  }

  .navbar-default .navbar-nav li a:hover,
  .navbar-default .navbar-nav li a:focus,
  .navbar-default .navbar-nav li a:active {
    color: #b1001c;
    background: none;
  }

  .navbar-default .navbar-nav .active a {
    background: none;
    color: #b1001c;
  }

  .navbar-default .navbar-nav .active a:hover,
  .navbar-default .navbar-nav .active a:focus {
    background: none;
    color: #b1001c;
  }

  @media (min-width: 992px) {
    .navbar-default {
      background: #333333 var(--guitar-url) no-repeat 95% -70px;
    }
  }

  @media (min-width: 1200px) {
    .navbar-default {
      background: #333333 var(--guitar-url) no-repeat 85% -70px;
    }
  }

  @media (min-width: 768px) {
    .navbar-nav {
      margin-left: 10px;
      margin-top: 50px;
    }
  }

  @media (min-width: 992px) {
    .navbar-nav {
      margin-left: 10px;
      margin-top: 50px;
    }
  }

  @media (min-width: 1200px) {
    .navbar-nav {
      margin-left: 10px;
      margin-top: 50px;
    }
  }
</style>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="--guitar-url:url({guitarUrl});--logo-url:url({logoUrl})">
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

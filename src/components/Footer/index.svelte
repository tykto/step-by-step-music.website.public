<style>
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #333333;
    /* Set the fixed height of the footer here */
    height: 100px;
    font-size: 14px;
    padding-top: 10px;
    color: #ffffff;
    font-family: 'chanticleer_roman_nfregular';
  }

  .container-fluid {
    background: #333333;
  }

  .t-info {
    text-align: right;
  }

  a {
    font-weight: normal;
    color: #ffffff;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #b1001c;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    #footer {
      background: #333333 url(./images/drumsticks.png) no-repeat 40% bottom;
    }

    .container-fluid {
      background: transparent;
    }
  }
</style>

<div id="footer">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 t-contact">
        <p>0404808861</p>
        <p>info@stepbystepmusic.education</p>
      </div>
      <div class="t-info col-xs-12 col-sm-6 col-md-6">
        <p class="t-copy">&copy; 2016 Step By Step Music</p>
        <p><a href="http://www.tykto.com" target="_blank">Website by Tykto</a></p>
      </div>
    </div>
  </div>
</div>

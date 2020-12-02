<script type="ts">
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
        <li class=""><a href="schools">SCHOOLS</a></li>
        <li class=""><a href="parents">PARENTS</a></li>
        <li class="active"><a href="contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="jumbotron-contact" />
<div class="container-fluid t-content">
  <div class="row t-page-heading">
    <div class="col-xs-7 col-sm-4 col-md-4 t-title">
      <h2>CONTACT</h2>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-md-4">
        <h3>Get in Touch</h3>
        <h4><span class="fa fa-phone" /> 0404808861</h4>
        <h4><span class="fa fa-envelope" /> <a href="mailto:info@stepbystepmusic.education">info@stepbystepmusic.education</a></h4>
        <h4><span class="fa fa-envelope-o" /> PO Box 4228 Knox City Centre 3152</h4>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-8">
        <h3>Want to Know More?</h3>
        <h4>
          If you would like to book your child in for instrumental music lessons, find out about having instumental music at your school or interested in
          teaching please fill in the form below:
        </h4>
        <form>
          <div class="form-group">
            <label for="exampleInputEnquiryType">I am a</label>
            <select class="form-control">
              <option>Student</option>
              <option>Parent</option>
              <option>Teacher</option>
              <option>School</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPhone">Phone</label>
            <input type="text" class="form-control" id="exampleInputPhone" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label for="exampleInputInstrument">Instrument</label>
            <select class="form-control">
              <option>Guitar</option>
              <option>Drums</option>
              <option>Voice</option>
            </select>
          </div>
          <div class="form-group"><label for="exampleInputName">Comment</label> <textarea class="form-control" rows="10" /></div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </div>
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

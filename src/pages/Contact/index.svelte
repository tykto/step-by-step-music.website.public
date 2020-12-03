<script type="ts">
  import Page from '@app/components/Page';
  import jumbotronUrl from './jumbotron.jpg';
</script>

<style>
  .row {
    padding-top: 20px;
  }

  form {
    padding-bottom: 10px;
  }
</style>

<Page heading="CONTACT" active="contact" {jumbotronUrl}>
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
        If you would like to book your child in for instrumental music lessons, find out about having instumental music at your school or interested in teaching
        please fill in the form below:
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
</Page>

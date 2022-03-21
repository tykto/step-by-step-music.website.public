<style>
  form {
    padding-bottom: 10px;
  }
</style>

<script type="ts">
  import Page from '$lib/ui.components/Page';
  const bgClass = 'bg-jumbotron-contact';
</script>

<Page heading="CONTACT" active="contact" {bgClass}>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-3 font-calibri pb-6">
    <div class="text-lg space-y-3">
      <h3 class="text-2xl">Get in Touch</h3>
      <ul class="fa-ul" style="--fa-li-margin: 1.5em;">
        <li><span class="fa-li"><i class="fa-solid fa-phone" /></span> 0404808861</li>
        <li>
          <span class="fa-li"><i class="fa-solid fa-paper-plane" /></span>
          <a class="hover:font-bold" href="mailto:info@stepbystepmusic.education">info@stepbystepmusic.education</a>
        </li>
        <li><span class="fa-li"><i class="fa-solid fa-envelope" /></span> PO Box 4228 Knox City Centre 3152</li>
      </ul>
    </div>
    <div class="xl:col-span-2 text-lg space-y-3">
      <h3 class="text-2xl">Want to Know More?</h3>
      <h4>
        If you would like to book your child in for instrumental music lessons, find out about having instumental music at your school or interested in teaching
        please fill in the form below:
      </h4>
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
        <label class="block col-span-2 lg:col-span-1" for="exampleInputEnquiryType">
          <span>I am a</span>
          <select
            class="block form-select w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            <option>Student</option>
            <option>Parent</option>
            <option>Teacher</option>
            <option>School</option>
          </select>
        </label>
        <label class="block col-span-2 lg:col-span-1" for="exampleInputName">
          <span>Name</span>
          <input
            type="text"
            class="block form-input w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            id="exampleInputName"
            placeholder="Name"
          />
        </label>
        <label class="block col-span-2" for="exampleInputEmail1">
          <span>Email</span>
          <input
            type="email"
            class="block form-input w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </label>
        <label class="block col-span-2 lg:col-span-1" for="exampleInputPhone">
          <span>Phone</span>
          <input
            type="text"
            class="block form-input w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            id="exampleInputPhone"
            placeholder="Phone"
          />
        </label>
        <label class="block col-span-2 lg:col-span-1" for="exampleInputInstrument">
          <span>Instrument</span>
          <select
            class="block form-select w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            <option>Guitar</option>
            <option>Drums</option>
            <option>Voice</option>
          </select>
        </label>
        <label class="block col-span-2" for="exampleInputName">
          <span>Comment</span>
          <textarea
            class="block form-textarea w-full rounded-md border-gray-300 shadow-sm
          focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            rows="6"
          />
        </label>
        <button type="submit" class="col-span-2 rounded-md bg-mineshaft hover:bg-mineshaft-100 text-white py-3">Submit</button>
      </form>
    </div>
  </div>
</Page>

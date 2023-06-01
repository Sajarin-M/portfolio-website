<script>
  import ContactItem from './contact-item.svelte';
</script>

<section
  id="contact"
  class="px-6 xl:px-none mx-9 mt-20 md:mt-25 max-w-6xl mx-auto scroll-m-navbar pb-12"
>
  <div class="bg-secondary-600 w-full rounded-xl shadow-primary-card p-6 mt-7">
    <div class="grid xl:grid-cols-2 gap-10">
      <div>
        <p class="section-subheader">Get in touch</p>
        <p class="section-header my-2.5">Contact.</p>
        <p class="section-description mb-6">
          Leave your email and I will get back to you within 24 hours
        </p>
        <div class="flex flex-col gap-6">
          <ContactItem
            label="Phone"
            icon="i-mdi-phone"
            value="+91 8139036500"
            href="tel:+918139036500"
          />
          <ContactItem
            label="Email"
            icon="i-mdi-email"
            value="sajarinm@gmail.com"
            href="mailto:sajarinm@gmail.com"
          />
          <ContactItem
            blank
            label="Github"
            value="Sajarin-M"
            icon="i-mdi-github"
            href="https://github.com/Sajarin-M"
          />
          <ContactItem
            blank
            label="Linkedin"
            value="@sajarinm"
            icon="i-mdi-linkedin"
            href="https://www.linkedin.com/in/sajarinm/"
          />
          <ContactItem
            blank
            label="Location"
            value="Malappuram , Kerala , India"
            icon="i-mdi-map-marker"
            href="https://goo.gl/maps/LqyyUa85WQQh8eKT8"
          />
        </div>
      </div>
      <div
        class="bg-secondary-700/20 rounded-b-xl p-6 -mx-6 -mb-6 xl:(mx-none mb-none rounded-t-xl p-7)"
      >
        <form class="mt-6">
          <div class="mb-6">
            <label for="name" class="label asterisk">Name</label>
            <input type="text" id="name" class="input" placeholder="John" required />
          </div>
          <div class="mb-6">
            <label for="email" class="label asterisk">Email</label>
            <input type="email" id="email" class="input" placeholder="john@gmail.com" required />
          </div>
          <div class="mb-6">
            <label for="message" class="label">Message</label>
            <textarea rows="8" id="message" class="input resize-none" placeholder="Something..." />
          </div>
          <button type="submit" class="btn text-[0.9rem]">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .label {
    @apply block mb-2 text-sm font-medium text-gray-200;
  }

  .input {
    @apply bg-secondary-500/20 font-default text-gray-200 text-sm rounded-lg outline-none border-none focus:ring-primary-50 block w-full p-2.5;
  }

  .asterisk::after {
    content: '*';
    @apply ml-1;
  }
</style>

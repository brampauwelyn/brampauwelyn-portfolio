<template>
  <div id="contact-form" class="column col-6">
      <h4>Send me a Message</h4>
      <form action="" name="contact-form" method="post" netlify netlify-honeypot="bot-field">
        <div class="form-group">
          <input type="text" name="name" id="name" placeholder="Your name">
        </div>
        <div class="form-group">
          <input type="text" name="email" id="email" placeholder="Email address">
        </div>
        <div class="form-group">
          <textarea name="message" id="message" placeholder="Message"></textarea>
        </div>
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="form-group">
          <button class="btn dark" type="submit">Send Message</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style lang="scss">

</style>


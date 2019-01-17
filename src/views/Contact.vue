<template>
  <div id="contact" class="contact">
		<div class="container">
			<div class="gap-100"></div>
			<div class="row">
        <ContactInfo />
        <ContactForm />
			</div>
		</div>
  </div>
</template>

<script>
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

export default {
  name:'contact',
  components: {
    ContactInfo,
    ContactForm
  }
}
</script>
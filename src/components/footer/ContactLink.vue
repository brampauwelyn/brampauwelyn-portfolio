<template>
	<div class="copy">
        <p>Feel free to contact me anytime, anywhere <br> <a href="#" class="link">hello@brampauwelyn.be</a></p>
	</div>
</template>

<script>
export default {
  name: "ContactLink"
};
</script>

<style lang="scss">
.footer .copy {
  margin-bottom: 50px;
}

.footer .copy:before {
  display: block;
  content: "";
  width: 2px;
  height: 30px;
  margin: 0 auto 50px;
  background: #111111;
}
</style>

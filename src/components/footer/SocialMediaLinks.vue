<template>
  <div id="social-media-links">
    	<ul class="social">
				<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="#"><i class="fa fa-github"></i></a></li>
				<li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
			</ul>
  </div>
</template>

<script>
export default {
  name: "SocialMediaLinks"
};
</script>

<style lang="scss">
.social {
  list-style: none;
}

.social li {
  display: inline-block;
  position: relative;
}

.social li a {
  font-size: 16px;
  color: #111111;
  padding: 0 15px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.social li a:hover {
  color: #ff9999;
}

.social li:first-child a {
  padding-left: 0;
}

.social li:last-child a {
  padding-right: 0;
}

.footer .social {
  margin-bottom: 0;
}

@media (max-width: 800px) {
  .footer .social {
    margin: 50px 0;
  }
}
</style>

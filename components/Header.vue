<template>
  <div id="header" class="heading">
		<div class="container text-center">
			<h1 class="big-title">Web Developer</h1>
		</div>
		<CurrentTrack />
	</div>
</template>

<script>
import Work from '@/static/work.json';
import CurrentTrack from '@/components/CurrentTrack.vue';

export default {
	name: 'Header',
	allWork: Work,
	components: {
		CurrentTrack
	}
}
</script>

<style lang="scss">
.heading {
	padding: 100px 0 0;
	position: relative;
}

.heading:after {
	display: block;
	content: '';
	width: 2px;
	height: 50px;
	background: #111111;
	margin: 50px auto 100px;
}

@media (max-width:600px) {
	.heading {
		padding: 25px 0 0;
	}

	.heading:after {
		margin-bottom: 50px;
	}

}
</style>

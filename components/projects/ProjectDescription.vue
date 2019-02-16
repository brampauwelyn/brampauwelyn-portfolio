<template>
  <div class="column col-7">
		<h6>{{ category }}</h6>
		<h1>{{ name }} </h1>
		<div class="gap-25"></div>
		<p class="lead">{{ description_intro }}</p>
		<p> {{ description_main }} </p>
		<div class="gap-25"></div>
	</div>
</template>

<script>
export default {
	name: 'ProjectDescription',
	props: ['name', 'category','description_intro','description_main']
}
</script>
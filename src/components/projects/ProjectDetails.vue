<template>
    <div class="column col-5">
					<h6>Project Info</h6>
					<div class="details__list">
						<div class="details__item">
							<span class="details__item__title">Client</span>
							<p>{{ client }}</p>
						</div>
						<div class="details__item">
							<span class="details__item__title">Date</span>
							<p>{{ date }}</p>
						</div>
						<div class="details__item">
							<span class="details__item__title">Technologies</span>
							<p>{{ technologies }}</p>
						</div>
						<div class="details__item">
							<span class="details__item__title">View site</span>
							<p>
                <a :href="siteLink" class="link" target="_blank">
                  {{ siteName }} <i class="fa fa-link"></i>
                </a>
              </p>
						</div>
					</div>
				</div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['client', 'date', 'technologies', 'siteLink', 'siteName']
}
</script>

<style lang="scss">
.details__list:not(:last-child) {
	margin-bottom: 25px;
}

.details__list .details__item {
	width: 100%;
	position: relative;
	font-size: 14px;
}

.details__list .details__item:not(:last-child) {
	margin-bottom: 15px;
}

.details__list .details__item .details__item__title {
	display: block;
	font-size: 14px;
	color: #b3b3b3;
}
</style>




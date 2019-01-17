<template>
  <div class="project">
		<div class="container">
			<div class="gap-100"></div>
			<div class="row">
        <ProjectDetails
          client="Jean Sur Mer"
          date="27.01.2017"
          technologies="html, sass, js, gulp"
          siteLink="http://www.northseaproducts.com"
          siteName="northseaproducts.com"
        />
        <ProjectDescription />
			</div>
		</div>
  </div>
</template>

<script>
import ProjectDetails from '@/components/projects/ProjectDetails.vue';
import ProjectDescription from '@/components/projects/ProjectDescription.vue';

export default {
  name: 'Project',
  components: {
    ProjectDetails,
    ProjectDescription
  }
}
</script>



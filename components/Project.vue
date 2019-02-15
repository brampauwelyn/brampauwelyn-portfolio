<template>
  <div class="project">
			<div class="gap-100"></div>
			<div class="row">
        <ProjectDetails
          :client="client"
          :date="date"
          :technologies="technologies"
          :siteLink="siteLink"
          :siteName="siteName"
        />
        <ProjectDescription 
          :category="category"
          :client="client"
          :description_intro="description_intro"
          :description_main="description_main"
        />
			</div>
  </div>
</template>

<script>
import ProjectDetails from '@/components/projects/ProjectDetails.vue';
import ProjectDescription from '@/components/projects/ProjectDescription.vue';

export default {
  name: 'Project',
  props: ['client', 'date', 'technologies', 'siteLink', 'siteName', 'category','description_intro','description_main'],
  components: {
    ProjectDetails,
    ProjectDescription
  }
}
</script>



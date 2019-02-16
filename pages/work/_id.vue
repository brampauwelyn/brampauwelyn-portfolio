<template>
  <div class="container project-detail">
    <img :src="require('@/static/images/'+image+'.jpg')" alt="">
    <Project 
      :client="client"
      :date="date"
      :name="name"
      :category="category"
      :technologies="technologies"
    />
  </div>
</template>

<script>
import Project from '@/components/Project.vue';
import Work from '@/static/work.json';

export default {
  name: 'NorthSeaProducts',
  data: function(){
    return {
      selectedWork: "",
      client: "",
      name: "",
      category: "",
      date: "",
      image: "",
      technologies: ""
    }
  },
  components: {
    Project
  },
  methods: {
    getWork: function(){
      const path = this.$route.path;
      this.selectedWork = this.$root.allWork.filter( work => work.seoUrl === path);
      this.client = this.selectedWork[0].client;
      this.category = this.selectedWork[0].category;
      this.date = this.selectedWork[0].date;
      this.image = this.selectedWork[0].image;
      this.technologies = this.selectedWork[0].technologies;
      this.name = this.selectedWork[0].name;
    }
  },
  created(){
    this.getWork();
  }
}
</script>

<style lang="scss" scoped>

</style>


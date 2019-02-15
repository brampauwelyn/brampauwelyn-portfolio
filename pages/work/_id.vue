<template>
  <div class="container project-detail">
    <img :src="require(`@/static/images/${image}.jpg`)" alt="">
    <h1>{{ $route.params.id }}</h1>
    <Project 
      :client="client"
      :date="date"
      :category="category"
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
      category: "",
      date: "",
      image: "",
    }
  },
  components: {
    Project
  },
  methods: {
    getWork: function(){
      const workname = this.$route.params.id;
      this.selectedWork = this.allWork.filter( work => work.name === workname);
      this.client = this.selectedWork[0].name;
      this.category = this.selectedWork[0].category;
      this.date = this.selectedWork[0].date;
      this.image = this.selectedWork[0].image;
    }
  },
  created(){
    this.getWork();
  }
}
</script>

<style lang="scss" scoped>

</style>


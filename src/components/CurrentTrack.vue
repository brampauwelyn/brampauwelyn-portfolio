<template>
  <div id="current-track">
    <p>Hi, I'm currently listening to:</p>
    <p class="artist">{{ artist }}</p>
    <p class="song">{{ song }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrentTrack',
  data: function(){
   return{
     artist: '',
     song: '',
   }
  },
  methods: {
    getCurrentTrack: function(){
      const user = 'bram_pauwelyn';
      const api_key = '6cd40f6787867ede2c5aa4e2f103be06';
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${api_key}&limit=1&format=json`;
      axios.get(url)
      .then( (res) => {
        const song = res.data.recenttracks.track[0];
        console.log(song);
        this.song = song.name;
      })
    }
  },
  created(){
    this.getCurrentTrack();
  }
}
</script>

<style lang="scss">
  #current-track{
    width: 260px;
    height: 100px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    color: #fff;
    padding: 20px;
  }
</style>

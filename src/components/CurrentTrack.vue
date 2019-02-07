<template>
  <div id="current-track" v-show="loaded">
    <div class="track-info">
      <div class="cover__thumbnail">
        <div class="cover__equalizer">
          <span class="bar"></span>
        </div>
        <img class="cover__image" :src="image" alt="">
      </div>
      <div>
        <p class="track-intro">Hi, I'm currently listening to</p>
        <p class="artist">{{ artist }} - {{ song }}</p>
      </div>
    </div>
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
     image: '',
     loaded: false
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
        this.song = song.name;
        this.image = song.image[3]["#text"];
        this.artist = song.artist["#text"];
        this.loaded = true;
      })
    }
  },
  created(){
    this.getCurrentTrack()
  }
}
</script>

<style lang="scss">
  #current-track{
    padding: 20px 40px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    color: #fff;
    padding: 20px;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
  }

  .track-intro{
    p{
      margin-bottom: 10px;
    }
  }

  .track-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cover__thumbnail{
    position: relative;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
  }

  .cover__image{
    width: 50px;
  }

  .cover__equalizer{
    position: absolute;
    width: 100%;
    height: 100%;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
  }

  .artist{
    font-size: .9em;
  }

  .bar{
    display: block;
    width: 5px;
    height: 10px;
    background-color: #fff;
    bottom: 0;
    position: absolute;
  }


@keyframes fadein {
    from { 
      opacity: 0; 
      transform: scale(0) translateX(3000px);
    }
    to   { 
      opacity: 1;
      transform: scale(1) translate(0,0);
    }
}



</style>

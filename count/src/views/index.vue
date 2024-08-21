<template>
    <div>
      <TeamList />
      <PlayerList />
      <Match />
    </div>
  </template>
  
  <script>
  import TeamList from '../components/TeamList.vue';
  import PlayerList from '../components/PlayerList.vue';
  import Match from '../components/Match.vue';
  
  export default {
    components: {
      TeamList,
      PlayerList,
      Match
    }
  };
  </script>
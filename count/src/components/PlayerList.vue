<template>
    <div>
      <h2>Players</h2>
      <ul>
        <li v-for="player in players" :key="player.id">{{ player.name }} - {{ player.team }}</li>
      </ul>
      <input v-model="newPlayerName" placeholder="New Player Name" />
      <select v-model="selectedTeam">
        <option v-for="team in teams" :key="team.id" :value="team.name">{{ team.name }}</option>
      </select>
      <button @click="setPlayer">Add Player</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useTeamStore } from '@/store';
  
  export default defineComponent({
    data() {
      return {
        newPlayerName: '',
        selectedTeam: ''
      };
    },
    computed: {
      teams() {
        const store = useTeamStore();
        return store.teams;
      },
      players() {
        const store = useTeamStore();
        return store.players;
      }
    },
    methods: {
      setPlayer() {
        if (this.newPlayerName && this.selectedTeam) {
          const store = useTeamStore();
          store.setPlayer(this.newPlayerName, this.selectedTeam);
          this.newPlayerName = '';
          this.selectedTeam = '';
        }
      }
    }
  });
  </script>
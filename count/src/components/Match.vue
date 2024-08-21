<template>
    <div>
      <h2>Start Match</h2>
      <select v-model="team1">
        <option v-for="team in teams" :key="team.id" :value="team.name">{{ team.name }}</option>
      </select>
      <select v-model="team2">
        <option v-for="team in teams" :key="team.id" :value="team.name">{{ team.name }}</option>
      </select>
      <button @click="startMatch">Start Match</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useTeamStore } from '@/store';
  
  export default defineComponent({
    data() {
      return {
        team1: '',
        team2: '',
        store: useTeamStore()
      };
    },
    computed: {
      teams() {
        const store = useTeamStore();
        return store.teams;
      }
    },
    methods: {
      startMatch() {
        if (this.team1 && this.team2 && this.team1 !== this.team2) {
            this.store.setMatchTeams(this.team1, this.team2);
            RouterLink.push({ name: 'match' });
        } else {
          alert('Please select two different teams');
        }
      }
    }
  });
  </script>
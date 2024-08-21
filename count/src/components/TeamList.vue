<template>
  <div>
    <h2>Teams</h2>
    <div>
      <div v-for="team in teams" :key="team.id">
        {{ team.name }}
      </div>
    </div>
    <input v-model="newTeamName" placeholder="New Team Name" />
    <button @click="addTeam">Add Team</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTeamStore } from "@/store";

export default defineComponent({
  data() {
    return {
      store: useTeamStore(),
      newTeamName: "",
    };
  },
  computed: {
    teams() {
      return this.store.teams;
    },
  },
  methods: {
    addTeam() {
      if (this.newTeamName) {
        this.store.addTeam(this.newTeamName);
        this.newTeamName = "";
      }
    },
  },
});
</script>

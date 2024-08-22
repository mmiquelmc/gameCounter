<template>
  <div class="h-screen">
    <div class="flex w-full mb-5">
      <AddTeam />
    </div>
    <TeamList :class="isTeams"/>
    <PlayerList class="hidden" />
    <Match class="hidden" />
  </div>
</template>

<script>
import TeamList from '../components/TeamList.vue';
import PlayerList from '../components/PlayerList.vue';
import Match from '../components/Match.vue';
import AddTeam from '@/components/AddTeam.vue';
import { useTeamStore } from '@/store';

export default {
  data() {
    return {
      store: useTeamStore()
    };
  },
  components: {
    AddTeam,
    PlayerList,
    Match,
    TeamList
  },
  computed: {
    isTeams() {
      if (this.store.teams.length > 0) {
        return 'flex';
      }
      return 'hidden';
    }
  }
};
</script>
import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [],
    players: [],
    onMatch: false,
    matchTeams: [],

  }),
  actions: {

    //setters
    addTeam(name) {
      this.teams.push({ id: Date.now(), name });
    },
    setPlayer(name, team) {
      this.players.push({ id: Date.now(), name, team });
    },
    setMatchTeams(team1, team2) {
      this.matchTeams = [team1, team2];
    },
    setOnMatch() {
      this.onMatch = !this.onMatch;
    },

    //getters
    get getPlayers() {
      return this.players;
    },
    get getTeams() {
      return this.teams;
    },
    get getMatchTeams() {
      return this.matchTeams;
    },
    get getOnMatch() {
      return this.onMatch;
    },
  }
});

export default pinia;
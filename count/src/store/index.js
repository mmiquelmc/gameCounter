import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

export const useTeamStore = defineStore("team", {
  state: () => ({
    teams: [],
    onMatch: false,
    matchTeams: [],
    colours: [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
      "black",
      "white",
    ],
    abailableColours: [],
    usedColours: [],
  }),
  actions: {
    //setters
    addTeam(name) {
      console.log(this.teams);
      if (this.teams.find((team) => team.name === name)) {
        alert("Team already exists");
        return;
      }
      this.teams.push({ id: Date.now(), name, players: [] });
    },
    setPlayer(name, teamId) {
      let player = { id: Date.now(), name, teamId };
      this.teams.find((t) => t.id === teamId).players.push(player);
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

    //deleters
    deleteTeam(id) {
      this.teams = this.teams.filter((team) => team.id !== id);
    },
    deletePlayer(playerId, teamId) {
      console.log("deleting player");
      let team = this.teams.find((t) => t.id === teamId);
      team.players = team.players.filter((player) => player.id !== playerId);
    },
  },
});

export default pinia;

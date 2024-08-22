import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

export const useTeamStore = defineStore("team", {
  state: () => ({
    teams: [],
    playerList: [],
    // noTeamPlayers: [],
    // // onMatch: false,
    // // matchTeams: [],
    // // colours: [
    // //   "red",
    // //   "blue",
    // //   "green",
    // //   "yellow",
    // //   "purple",
    // //   "orange",
    // //   "pink",
    // //   "brown",
    // //   "black",
    // //   "white",
    // // ],
    // // abailableColours: [],
    // // usedColours: [],
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
      name = name.trim();
      name = name.toLowerCase();
      let player = { id: Date.now(), name, teamId };
      if (this.playerList.find((p) => p.name === name)) {
        alert("Player already exists");
        return;
      }
      this.playerList.push(player);
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

    //other

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    distributePlayers() {
      // Recopilar todos los jugadores
      this.teams.forEach((team) => {
        team.players = []; // Vaciar los equipos
      });

      // Mezclar los jugadores
      this.playerList = this.shuffleArray(this.playerList);

      // Asignar jugadores a los equipos de manera equilibrada
      let teamIndex = 0;
      this.playerList.forEach((player) => {
        this.teams[teamIndex].players.push(player);
        teamIndex = (teamIndex + 1) % this.teams.length;
      });

      this.teams = teams;
    },
  },
});

export default pinia;

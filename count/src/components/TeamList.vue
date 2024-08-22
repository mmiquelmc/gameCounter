<template>
    <div class="w-3/4 h-1/3 mx-auto bg-gray-900 rounded p-4 relative">
        <button @click="shufle" class="absolute -top-10 right-0 p-2 bg-gray-950 text-white rounded flex items-center">
            <i class="material-icons">
                shuffle
            </i>
        </button>
        <div class="rounded flex flex-row gap-2 w-full h-full overflow-x-scroll overflow-y-hidden">
            <div class="rounded bg-gray-950 basis-1/2 min-w-[15%] " v-for="team in teams" :key="team.id">
                <span>
                    <p class="text-white text-center mt-2 uppercase">
                        {{ team.name }}
                    </p>
                </span>
                <div class="mt-2 w-full  flex flex-col justify-center items-center gap-2">
                    <span class="mt-2 w-[90%] flex flex-row relative">
                        <input type="text" placeholder="Add teammate" v-model="newPlayerNames[team.id]"
                            @keyup.enter="setPlayer(team.id)"
                            class=" border-none rounded p-1 w-full mx-auto bg-gray-800 text-white">
                        <button @click="setPlayer(team.id)"
                            class=" absolute right-0 rounded border border-spacing-1 border-white bg-black text-white w-fit mx-auto h-full flex justify-center items-center">
                            <i class="material-icons p-2">
                                add
                            </i>
                        </button>
                    </span>
                    <div class="flex flex-col gap-1 w-4/5 h-44 overflow-y-scroll">
                        <div v-for="player in team.players" class="relative rounded w-full bg-gray-600 ">
                            <div class="overflow-x-scroll">
                                <p class="text-white mx-2 p-2 capitalize">
                                    {{ player.name }}
                                </p>
                            </div>
                            <button @click="delUser(player.id, team.id)"
                                class="absolute right-0 top-0 h-full cursor-pointer flex justify-center items-center bg-inherit rounded-r-lg">
                                <i class="material-icons">
                                    cancel
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTeamStore } from "@/store";

export default {
    data() {
        return {
            store: useTeamStore(),
            newPlayerNames: {},
        };
    },
    methods: {
        setPlayer(teamId) {
            const newPlayerName = this.newPlayerNames[teamId];
            if (newPlayerName) {
                this.store.setPlayer(newPlayerName, teamId);
                this.newPlayerNames[teamId] = '';
            }
        },
        delUser(playerId, teamId) {
            this.store.deletePlayer(playerId, teamId);
        },
        shufle() {
            this.store.distributePlayers();
        }
    },
    computed: {
        teams() {
            return this.store.teams;
        },
    },
}
</script>
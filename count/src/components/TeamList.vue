<template>
    <div>
        <div class="flex flex-row gap-2 w-3/4 mx-auto">
            <div v-for="team in teams" :key="team.id">
                {{ team.name }}
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
        };
    },
    computed: {
        teams() {
            return this.store.teams;
        },
    },
}
</script>
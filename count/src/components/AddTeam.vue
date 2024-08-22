<template>
  <div class="mx-auto my-auto">
    <div class="flex flex-col gap-3">
      <input @keypress.enter="addTeam" class="text-center rounded p-1 mt-64" v-model="newTeamName" placeholder="Team Name" />
      <button class="rounded border border-spacing-1 border-white bg-black text-white w-fit mx-auto" @click="addTeam">
        <p class="px-2 py-1">
          Add Team
        </p>
      </button>
    </div>
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

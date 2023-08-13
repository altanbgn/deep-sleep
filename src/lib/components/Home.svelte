<script lang="ts">
  import type { ChangeMode } from "../types/index.d.ts"

  export let changeMode: ChangeMode
</script>

<div class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
  <button
    class="border-0 outline-0 bg-yellow-200 text-sm lg:text-base text-zinc-900 font-bold p-4 w-[300px]"
    on:click={() => changeMode("wakeup")}
    >
    CALCULATE WHEN TO WAKE UP
  </button>
  <button
    class="border-0 outline-0 bg-yellow-200 text-sm lg:text-base text-zinc-900 font-bold p-4 w-[300px]"
    on:click={() => changeMode("sleep")}
    >
    CALCULATE WHEN TO SLEEP
  </button>
</div>

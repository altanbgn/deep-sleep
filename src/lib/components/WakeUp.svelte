<script lang="ts">
  import type { ChangeMode } from "../types/index.d.ts"

	export let changeMode: ChangeMode
</script>

<div class="flex flex-col justify-between items-center gap-8">
	<p>Wake Up</p>
	<button
		class="border-0 outline-0 bg-blue-200 text-sm lg:text-base text-zinc-900 font-bold p-4 w-[300px]"
		on:click={() => changeMode(null)}
	>
		BACK
	</button>
</div>

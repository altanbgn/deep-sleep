<script lang="ts">
	import type { Mode } from '../lib/types/index.d.ts'
	import WakeUp from '$lib/components/WakeUp.svelte'
	import Sleep from '$lib/components/Sleep.svelte'
	import Home from '$lib/components/Home.svelte'

	let currentMode: Mode = null

	function changeMode(mode: Mode): void {
		currentMode = mode
	}
</script>

<div class="h-screen flex flex-col justify-center items-center gap-14 lg:gap-20">
	<h1 class="text-4xl lg:text-7xl text-center uppercase font-extrabold">
    😴 deep sleep 🌙
    <span class="block text-2xl mt-4 lowercase">v2.0.0</span>
  </h1>
	{#if currentMode === 'wakeup'}
		<WakeUp {changeMode} />
	{:else if currentMode === 'sleep'}
		<Sleep {changeMode} />
	{:else}
		<Home {changeMode} />
	{/if}
</div>

<script>
	import Management from '$lib/componentes/management.svelte';
	import SmartCategorization from '$lib/componentes/smartCategorization.svelte';
	import Analytics from '$lib/componentes/analytics/analytics.svelte';
	import { dataTableParams } from '$lib/store/store.js';

	let activePanel = $state('Management');

	const changePanel = (event) => {
		activePanel = event.target.textContent;
	};
</script>

<div class="container">
	<div class="btns">
		<button class="btnHide" class:active={activePanel === 'Management'} onclick={changePanel}
			>Management</button
		>
		<button
			class="btnHide"
			class:active={activePanel === 'Smart Categorization'}
			onclick={changePanel}>Smart Categorization</button
		>
		<button class="btnHide" class:active={activePanel === 'Analytics'} onclick={changePanel}
			>Analytics</button
		>
	</div>
</div>
{#if $dataTableParams.filas.length}
	<div class="active" style="margin-bottom: 10px;">
		{#if activePanel === 'Management'}
			<Management />
		{:else if activePanel === 'Smart Categorization'}
			<SmartCategorization />
		{:else if activePanel === 'Analytics'}
			<Analytics />
		{/if}
	</div>
{:else}
	Cargando...
{/if}

<style>
	.active {
		padding: 15px;
	}
</style>

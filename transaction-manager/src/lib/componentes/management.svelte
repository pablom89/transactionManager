<script>
	import Filtro from '$lib/componentes/management/filtro.svelte';
	import Ordenar from '$lib/componentes/management/ordenarDesktop.svelte';
	import Total from '$lib/componentes/management/total.svelte';
	import { dataTableParams, mobile } from '$lib/store/store.js';

	let items = $derived($mobile ? $dataTableParams.itemsMobile.colum : $dataTableParams.items.colum);
</script>

{#if items}
	<div class="container">
		<Filtro />
		<Ordenar />
		<Total />
	</div>
{:else}
	Cargando...
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		row-gap: 15px;
	}

	@media screen and (max-width: 500px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

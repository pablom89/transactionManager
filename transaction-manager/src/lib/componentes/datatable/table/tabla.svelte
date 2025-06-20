<script>
	import Encabezado from './encabezadoTabla.svelte';
	import Filas from './filas.svelte';
	import SinDatos from '$lib/componentes/datatable/table/sinDatos.svelte';
	import { dataTableParams, loadingDataTabla } from '$lib/store/store.js';

	export let items;
</script>

<div class="container">
	<table class="tablaRound">
		<thead>
			<Encabezado {items} />
			<slot name="filtros" {items} />
		</thead>
		{#if $loadingDataTabla}
			<tbody>
				<tr>
					<td>Cargando...</td>
				</tr>
			</tbody>
		{:else if $dataTableParams.filas.length}
			<Filas let:f>
				<slot {f} />
			</Filas>
		{:else}
			<SinDatos />
		{/if}
	</table>
</div>

<style lang="scss">
	.container {
		max-width: fit-content;
		transform: rotateX(180deg);
		overflow-x: overlay;
		margin-bottom: 15px;
	}

	.tablaRound {
		word-break: break-word;
		transform: rotateX(180deg);
	}

	@media screen and (max-width: 500px) {
		.container {
			display: flex;
			margin: auto auto 15px auto;
		}
	}
</style>

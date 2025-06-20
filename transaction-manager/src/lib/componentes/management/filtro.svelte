<script>
	import { limpiarFiltro } from '$lib/logica/index.js';
	import { categories } from '$lib/categories.js';
	import { dataTableParams, mobile, category, initialDate, finalDate } from '$lib/store/store.js';
	import { actualizarData } from '$lib/logica/index.js';

	$: items = $mobile ? $dataTableParams.itemsMobile.colum : $dataTableParams.items.colum;
</script>

{#if items}
	<div class="container">
		<span>Filter by: Date</span>
		<span class="date-range">
			<input type="date" bind:value={$initialDate} on:change={(e) => actualizarData(e)} />
			<span>to</span>
			<input type="date" bind:value={$finalDate} on:change={(e) => actualizarData(e)} />
		</span>
		<span>and / or Category</span>
		<select bind:value={$category} on:change={(e) => actualizarData(e)}>
			<option value="">Select a category</option>
			{#each categories as c}
				<option value={c.text}>{c.text}</option>
			{/each}
		</select>
		<button
			title="Limpiar filtros"
			class="btnOculto"
			class:noPermitido={!($category.length || $initialDate.length || $finalDate.length)}
			disabled={!($category.length || $initialDate.length || $finalDate.length)}
			on:click={() => limpiarFiltro()}
		>
			Clean filters
		</button>
	</div>
{/if}

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.noPermitido {
		cursor: not-allowed;
	}

	button {
		display: inline-block;
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-size: 16px;
		color: #f44336;
		&:disabled {
			color: gray;
		}
	}

	@media screen and (max-width: 900px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media screen and (max-width: 500px) {
		.date-range {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			row-gap: 15px;
		}
	}
</style>

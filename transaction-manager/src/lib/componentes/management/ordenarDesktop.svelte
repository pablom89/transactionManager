<script>
	import { cargar } from '$lib/logica/cargar.js';
	import { dataTableParams, loadingDataTabla } from '$lib/store/store.js';

	let ordenado = $derived($dataTableParams.items.ordenado);

	let placeholder = 'Select...';

	const modo = async (e) => {
		ordenado.m = e.target.value;
		await cargar('Ordenar');
	};

	const seleccion = async (e) => {
		ordenado.campo = e.target.value;
		let seleccionado = e.target.options;
		ordenado.name = seleccionado[seleccionado.selectedIndex].innerText;
		await cargar('Ordenar');
	};
</script>

<div>
	<span class="g1">Sort by:</span>
	{#if ordenado}
		<select
			name="ordenar"
			id="ordenar"
			class:noPermitido={$loadingDataTabla}
			disabled={$loadingDataTabla}
			bind:value={ordenado.campo}
			onchange={seleccion}
		>
			<option value={false} selected disabled>{placeholder}</option>

			{#if $dataTableParams.items.colum}
				{#each $dataTableParams.items.colum as d, index (index)}
					{#if d.o}
						<option value={d.name}>{d.title}</option>
					{/if}
				{/each}
			{/if}
		</select>
		<select
			name="ad"
			id="ad"
			bind:value={ordenado.m}
			class:noPermitido={!ordenado.campo}
			disabled={ordenado.campo && !$loadingDataTabla ? false : true}
			onchange={modo}
		>
			<option value="asc" selected>Ascendant</option>
			<option value="desc">Descend</option>
		</select>

		<button
			class="buttonBorrarOrdenar"
			class:noPermitido={!ordenado.campo || $loadingDataTabla}
			title="Clean Filter"
			aria-label="Clean Filter"
			disabled={ordenado.campo && !$loadingDataTabla ? false : true}
			onclick={async () => {
				ordenado.campo = false;
				ordenado.name = false;
				ordenado.m = 'asc';
				await cargar('Ordenar');
			}}
		>
			Delete order
		</button>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		margin-right: 20px;
		align-items: center;
		column-gap: 10px;
	}

	.buttonBorrarOrdenar {
		cursor: pointer;
		background: none;
		border: none;
		color: #f44336;
		&:disabled {
			color: gray;
		}
	}

	.noPermitido {
		cursor: not-allowed;
	}

	@media screen and (max-width: 500px) {
		div {
			flex-direction: column;
			align-items: flex-start;
			row-gap: 10px;
		}
	}
</style>

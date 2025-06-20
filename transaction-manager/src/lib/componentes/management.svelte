<script>
	import Filtro from '$lib/componentes/management/filtro.svelte';
	import Ordenar from '$lib/componentes/management/ordenarDesktop.svelte';
	import Total from '$lib/componentes/management/total.svelte';
</script>

<div class="container">
	<Filtro />
	<Ordenar />
	<Total />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		padding: 10px 0;
		margin-bottom: 15px;
		row-gap: 15px;
	}

	@media screen and (max-width: 500px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
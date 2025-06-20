<script>
	import AutoCategorize from '$lib/componentes/smartCategorization/autoCategorize.svelte';
	import BulkActions from '$lib/componentes/smartCategorization/bulkActions.svelte';
</script>

<div class="container">
	<AutoCategorize />
	<BulkActions />
</div>

<style>
	.container{
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	@media screen and (max-width: 500px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
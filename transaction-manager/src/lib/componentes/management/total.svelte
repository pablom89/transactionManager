<script>
	import { dataTableParams } from '$lib/store/store.js';

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	$: totalAmount = $dataTableParams.filas.reduce((acc, fila) => {
		return acc + (fila.amount || 0);
	}, 0);
</script>

<div class="container">
	<div>Transaction count: <span class="titulo">{$dataTableParams.filas.length}</span></div>
	<div>Total Amount: <span class="titulo">{formatter.format(totalAmount.toFixed(2))}</span></div>
</div>

<style>
	.container {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 10px;
	}

	@media screen and (max-width: 500px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

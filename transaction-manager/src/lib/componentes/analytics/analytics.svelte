<script>
	import { dataTableParams } from '$lib/store/store.js';

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	let analytics = $derived(() => {
		if (!$dataTableParams.filas) return {};

		const categoryTotals = {};
		let totalIncome = 0;
		let totalExpenses = 0;

		$dataTableParams.filas.forEach((t) => {
			if (!categoryTotals[t.category]) {
				categoryTotals[t.category] = 0;
			}
			categoryTotals[t.category] += t.amount;

			if (t.amount > 0) {
				totalIncome += t.amount;
			} else {
				totalExpenses += Math.abs(t.amount);
			}
		});

		const netAmount = totalIncome - totalExpenses;
		const avgTransaction =
			$dataTableParams.filas.length > 0 ? netAmount / $dataTableParams.filas.length : 0;

		return {
			categoryTotals,
			totalIncome,
			totalExpenses,
			netAmount,
			avgTransaction
		};
	});

</script>

<div class="mainContainer">
	{#if analytics()}
		<div class="container">
			<div class="titulo">
				Total Income: <span class="tituloBlack">{formatter.format(analytics().totalIncome)}</span>
			</div>
			<div class="titulo">
				Total Expenses: <span class="tituloBlack">{formatter.format(analytics().totalExpenses)}</span>
			</div>
			<div class="titulo">
				Total Net Amount: <span class="tituloBlack">{formatter.format(analytics().netAmount)}</span>
			</div>
			<div class="titulo">
				Average Transaction: <span class="tituloBlack"
					>{formatter.format(analytics().avgTransaction)}</span
				>
			</div>
		</div>
		<div class="container">
			<div class="titulo">Total by category:</div>
			{#each Object.entries(analytics().categoryTotals) as [category, total] (category)}
				<div>{category || 'Uncategorized'}: {formatter.format(total)}</div>
			{/each}
		</div>
	{:else}
		Cargando...
	{/if}
</div>

<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		row-gap: 15px;
		overflow-x: auto;
	}
	.container {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 10px;
	}

	@media screen and (max-width: 500px) {
		.container {
			flex-direction: column;
			align-items: center;
		}
	}
</style>

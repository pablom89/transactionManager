<script>
	import { dataTableParams } from '$lib/store/store.js';

	const bulkCategorize = (keyword, category) => {
		const stored = localStorage.getItem('data');
		if (!stored) return;

		let data = JSON.parse(stored);

		data = data.map((t) => {
			if (t.description.toUpperCase().includes(keyword.toUpperCase())) {
				return { ...t, category };
			}
			return t;
		});

		dataTableParams.actualizar({
			filas: [...data]
		});

		localStorage.setItem('data', JSON.stringify(data));
	};
</script>

<div class="container">
	<span>Quick Actions</span>
	<div class="bulk-buttons">
		<button onclick={() => bulkCategorize('STARBUCKS', 'Coffee')}> Categorize Starbucks </button>
		<button onclick={() => bulkCategorize('AMAZON', 'Shopping')}> Categorize Amazon </button>
		<button onclick={() => bulkCategorize('UBER', 'Transportation')}> Categorize Uber </button>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.bulk-buttons {
		display: flex;
		gap: 10px;
	}

	button {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column;
			align-items: flex-start;
		}

		.bulk-buttons {
			flex-direction: column;
			width: 100%;
		}

		button {
			max-width: 200px;
			text-align: center;
		}
	}
</style>
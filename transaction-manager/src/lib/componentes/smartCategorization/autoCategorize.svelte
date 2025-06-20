<script>
	import { categorizationRules } from '$lib/categories.js';
	import { dataTableParams } from '$lib/store/store.js';

	let checked = $state(false);

	// Auto-categorize function

	const autoCategorizeTrans = (description) => {
		const upperDesc = description.toUpperCase();
		for (const [keyword, category] of Object.entries(categorizationRules)) {
			if (upperDesc.includes(keyword)) {
				return category;
			}
		}
		return 'Uncategorized';
	};

	const changeAutoCategorize = () => {
		const stored = localStorage.getItem('data');
		if (!stored) return;

		const data = JSON.parse(stored);

		const updatedData = data.map((item) => {
			if (checked) {
				if (!item.category) {
					item.category = autoCategorizeTrans(item.description);
				}
			} else {
				if (!item.manualCategory) {
					item.category = '';
				}
			}
			return item;
		});

		dataTableParams.actualizar({
			filas: [...data]
		});

		localStorage.setItem('data', JSON.stringify(updatedData));
	};
</script>

<div class="container">
	<label for="auto">Auto categorize</label>
	<input type="checkbox" id="auto" bind:checked onchange={changeAutoCategorize} />
</div>

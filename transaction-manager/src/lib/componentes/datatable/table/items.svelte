<script>
	import { dataTableParams } from '$lib/store/store.js';
	import { categories } from '$lib/categories.js';
	
	let {items, f} = $props();

	const setCategory = (f) => {
		let stored = localStorage.getItem('data');
		let data = JSON.parse(stored);
		
		data = data.map(item => {
			if(item.id === f.id) {
				item.category = f.category;
				item.manualCategory = true;
			}
			return item;
		});

		dataTableParams.actualizar({ filas: [...data] });

		localStorage.setItem('data', JSON.stringify(data));
	};
</script>

{#each items as i, index (index)}
	{#if f[i.name] === null}
		<td style="text-align:center; font-size:{i.f_s};">-</td>
	{:else if i.name === 'category'}
		<td style="text-align:{i.a}; font-size:{i.f_s};">
			<select bind:value={f.category} onchange={() => setCategory(f)}>
				{#each categories as c (c.id)}
					<option value={c.text}>{c.text}</option>
				{/each}
			</select>
		</td>
	{:else}
		<td style="text-align:{i.a}; font-size:{i.f_s};">{f[i.name]}</td>
	{/if}
{/each}

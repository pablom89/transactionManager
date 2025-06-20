<script>
	import { dataTableParams } from '$lib/store/store.js';
	import Items from './items.svelte';

	let { items } = $props();
</script>

<tbody>
	{#each $dataTableParams.filas as f, index (index)}
		<tr>
			<Items {f}  {items}/>
		</tr>
	{/each}
</tbody>

<script>
	import Table from './table/tabla.svelte';
	import Items from './table/items.svelte';
	import { dataTableParams, mobile } from '$lib/store/store.js';

	let items = $derived($mobile ? $dataTableParams.itemsMobile.colum : $dataTableParams.items.colum);
</script>

{#if items}
	<Table {items} let:f>
		<Items {items} {f} />			
	</Table>
{/if}

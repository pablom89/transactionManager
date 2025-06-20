<script>
	import Panel from '$lib/componentes/panel.svelte';
	import DataTable from '$lib/componentes/datatable/datatable.svelte';
	import { items, itemsMobile } from '$lib/items.js';
	import { setDataTable } from '$lib/logica/setDataTable.js';
	import { cargar } from '$lib/logica/cargar.js';

	$effect(async () => {
		setDataTable(items, itemsMobile);
		await cargar();
	});
</script>

<h1>Transaction Manager & Display</h1>
<Panel />
<DataTable />

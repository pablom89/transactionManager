<script>
	import { dataTableParams } from '$lib/store/store.js';
</script>

<tbody>
	{#each $dataTableParams.filas as f}
		<tr>
			<slot {f} />
		</tr>
	{/each}
</tbody>

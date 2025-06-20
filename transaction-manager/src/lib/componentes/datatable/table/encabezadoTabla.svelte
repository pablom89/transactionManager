<script>
	export let items;
</script>

<tr>
	{#each items as i}
		<th style={`min-width: ${i.m_w}; width:${i.w}; font-size: ${i.f_s}; text-align: ${i.a}`}>
			{i.title}
		</th>
	{/each}
</tr>

<style lang="scss">
	th:first-child {
		height: 55px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		min-width: max-content;
	}
</style>

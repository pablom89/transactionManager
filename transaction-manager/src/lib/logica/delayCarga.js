import { get } from 'svelte/store';
import { cargar } from './cargar';
import { dataTableParams, delayCarga } from '$lib/store/store.js';

export const actualizarData = (e) => {
	if (e.keyCode == 9) return;
	if (get(delayCarga)) clearTimeout(get(delayCarga));

	delayCarga.set(
		setTimeout(async () => {
			dataTableParams.update((data) => ({
				...data,
				paginado: { ...data.paginado, pagina: 1 }
			}));

			await cargar('Actualizar filtro');
		}, 500)
	);
};

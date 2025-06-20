import { get } from 'svelte/store';
import { cargar } from './cargar';
import { dataTableParams, category, initialDate, finalDate } from '$lib/store/store.js';

//Limpia el filtro de todas las columnas

export async function limpiarFiltro() {
	category.set('');
	initialDate.set('');
	finalDate.set('');
	let params = get(dataTableParams);
	params.items.colum.map((i) => {
		i.filtro = '';
		return i;
	});
	dataTableParams.update(() => ({
		...params
	}));

	await cargar('Limpiar filtro');
}

import { get } from 'svelte/store';
import {
	dataTableParams,
	loadingDataTabla,
	category,
	initialDate,
	finalDate
} from '$lib/store/store.js';

export async function cargar(origen = 'N/A') {
	loadingDataTabla.set(true);
	let {
		paginado,
		items: { ordenado, colum }
	} = get(dataTableParams);

	let data = [];
	try {
		// Leer datos iniciales
		const stored = localStorage.getItem('data');
		if (stored) {
			data = JSON.parse(stored);
		} else {
			// Cargar el archivo JSON
			const response = await fetch('/data/data.json');
			if (!response.ok) throw new Error('Error al cargar el JSON');
			data = await response.json();

			localStorage.setItem('data', JSON.stringify(data));
		}

		// Filtrar los datos según los filtros establecidos en la parte superior
		if (get(category).length) {
			data = data.filter((item) => {
				return item.category && item.category.startsWith(get(category));
			});
		}

		if (get(initialDate).length) {
			data = data.filter((item) => {
				return new Date(item.date) >= new Date(get(initialDate));
			});
		}

		if (get(finalDate).length) {
			data = data.filter((item) => {
				return new Date(item.date) <= new Date(get(finalDate));
			});
		}

		// Ordenar los datos por defecto

		data.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);

			if (dateA < dateB) return -1;
			if (dateA > dateB) return 1;

			// Fechas iguales, ordenar por amount
			return a.amount - b.amount;
		});

		// Ordenar los datos manualmente si se ha especificado un campo de ordenación

		if (ordenado.campo) {
			switch (ordenado.campo) {
				case 'date':
					data.sort((a, b) => {
						const dateA = new Date(a.date);
						const dateB = new Date(b.date);
						return ordenado.m === 'asc' ? dateA - dateB : dateB - dateA;
					});
					break;
				case 'amount':
					data.sort((a, b) => {
						return ordenado.m === 'asc' ? a.amount - b.amount : b.amount - a.amount;
					});
					break;
				case 'category':
					data.sort((a, b) => {
						const catA = (a.category || '').toLowerCase();
						const catB = (b.category || '').toLowerCase();
						if (catA < catB) return ordenado.m === 'asc' ? -1 : 1;
						if (catA > catB) return ordenado.m === 'asc' ? 1 : -1;
						return 0;
					});
			}
		}

		dataTableParams.actualizar({
			filas: [...data],
			paginado: data.paginado ?? paginado
		});

		return data;
	} catch (error) {
		console.log('Error:', error);
	} finally {
		loadingDataTabla.set(false);
	}
}

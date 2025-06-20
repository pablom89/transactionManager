import { dataTableParams } from '$lib/store/store.js';

export const setDataTable = (items, itemsMobile, options = {}) => {
	dataTableParams.actualizar({
		items: { ...items },
		itemsMobile: { ...itemsMobile },
		filas: [],
		filtros: true,
		...options
	});
};

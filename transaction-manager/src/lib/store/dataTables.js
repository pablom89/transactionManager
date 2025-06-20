import { contract } from './storeContract';

let dataTable = {
	paginado: {
		ok: true,
		pagina: 1,
		paginas: 1,
		rxp: 10,
		registros: 10
	},
	action: 'crud',
	widthcolbtns: '150px',
	widthcolbtnsMovil: '50px',
	bgBtnH: 'darkGreenCell',
	btnh: [],
	btnf: [],
	items: [],
	itemsMobile: [],
	filas: []
};

const dataTableParams = contract(dataTable);
let loadingDataTabla = contract(false);
let mobile = contract(false);

let delayCarga = contract({});

let category = contract('');

let initialDate = contract('');
let finalDate = contract('');

const resetDataTables = () => {
	dataTableParams.reset();
};

export {
	dataTableParams,
	loadingDataTabla,
	mobile,
	delayCarga,
	category,
	initialDate,
	finalDate,
	resetDataTables
};

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			// Opcional: para importar sin rutas relativas largas
			includePaths: ['src/lib/estilos']
		}
	}),
	compilerOptions: {
		runes: true 
	},
	kit: {
		adapter: adapter()
	}
};

export default config;

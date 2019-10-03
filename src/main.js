// degit to paczka klonujaca repo githubowe ale nie inicjalizujaca gita
// ciekawe
//npx degit sveltejs/template
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

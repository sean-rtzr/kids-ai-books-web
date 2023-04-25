// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	server: {
		port: 32720,
	},
	css: [
		"vuetify/lib/styles/main.sass",
		"@mdi/font/css/materialdesignicons.min.css",
	],
	build: {
		transpile: ["vuetify"],
	},
});

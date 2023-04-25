module.exports = {
	apps: [
		{
			name: "kids-ai-books-web",
			exec_mode: "cluster",
			port: 32720,
			instances: 1,
			script: ".output/server/index.mjs",
		},
	],
};

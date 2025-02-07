'use strict';

const { 
	execute,
	sleep,
	watchForBuild,
	buildTheme,
	serveApp,
	watchTheme,
} = require('./build.kit');

const cmdArgs = require('command-line-args');

const { prod } = cmdArgs([{
	name: 'prod',
	type: Boolean,
	defaultValue: false
}]);

const serveOptions = [];
if (prod) {
	serveOptions.push('--prod');
}

async function main() {
	await buildAndWatch('qgrid-core');
	await buildAndWatch('qgrid-plugins');
	await buildAndWatch('ngx-qgrid');
	await buildAndWatch('ngx-qgrid-plugins');
	await buildAndWatch('ng2-qgrid');
	await buildAndWatch('ng2-qgrid-theme-basic');
	await buildAndWatch('ng2-qgrid-theme-material');
	await buildAndWatch('ng2-qgrid-app');
}

async function buildAndWatch(project) {
	await buildProject(project);
	await watchForBuild(project);
}

async function buildProject(project) {
	switch (project) {
		case 'qgrid-core':
		case 'qgrid-plugins':
		case 'ngx-qgrid':
		case 'ngx-qgrid-plugins':
		case 'ng2-qgrid': {
			execute(`cd packages/${project} && yarn build:watch`);
			return;
		}
		case 'ng2-qgrid-theme-basic':
		case 'ng2-qgrid-theme-material': {
			buildTheme(project);
			await sleep(1000);
			execute(`cd packages/${project} && yarn build:watch`);
			watchTheme(project);
			return;
		}
		case 'ng2-qgrid-app': {
			serveApp(serveOptions);
			return;
		}
	
		default: {
			console.log('Nothing to build');
			return;
		}
	}
}

main();

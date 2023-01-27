'use babel';

export default class Config {
	constructor(serie) {
		this.serie = serie;
        console.log(this.serie);
        console.log(atom.config.get(`testcafe-runner-atom-plugin.preset.hostname`));
        console.log(atom.config.get(`testcafe-runner-atom-plugin.theme.common.background`));
	}

	get(config, sub = '') {
		return atom.config.get(`testcafe-runner-atom-plugin.${this.serie}.${config}${sub != '' ? '.' + sub : ''}`);
	}
}

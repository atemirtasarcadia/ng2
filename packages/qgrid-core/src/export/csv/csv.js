import { getValueFactory } from '../../services/value';

const DELIMITER = ',';

function escape(value) {
	let result = '' + value;
	result = result.replace(/"/g, '""');
	result = /[\n",]/.test(result) ? `"${result}"` : result;
	return result;
}

export class CsvExport {
	write(rows, columns) {
		const result = [];
		const values = [];
		let head = [];
		for (let column of columns) {
			if (column.category === 'data') {
				values.push(getValueFactory(column));
				head.push(escape(column.title));
			}
		}
		result.push(head.join(DELIMITER));

		for (let row of rows) {
			const line = [];
			for (let getValue of values) {
				line.push(escape(getValue(row)));
			}
			result.push(line.join(DELIMITER));
		}

		return result.join('\n');
	}
}
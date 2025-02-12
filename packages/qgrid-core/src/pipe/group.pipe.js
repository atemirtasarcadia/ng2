import { mapColumns } from '../column/column.service';
import { Guard } from '../infrastructure/guard';
import { nodeBuilder } from '../node/node.build';

export function groupPipe(memo, context, next) {
	Guard.notNull(memo, 'memo');

	const { model } = context;
	const { rows: memoRows, nodes: memoNodes } = memo;
	if (memoRows.length) {
		const { rows } = model.data();
		const { by } = model.group();
		const columns = model.columnList().line;
		const columnMap = mapColumns(columns);
		const build = nodeBuilder(columnMap, by, context.valueFactory);

		memo.nodes = build(memoRows, i => {
			const row = memoRows[i];
			const index = rows.indexOf(row);
			return index < 0 ? i : index;
		});
	}

	model.pipe({
		effect: Object.assign({}, model.pipe().effect, { group: memoNodes })
	}, {
		source: 'group.pipe',
		behavior: 'core'
	});

	next(memo);
}
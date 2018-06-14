import { EditorOptions } from './editor.options';

/**
 * A class that represents any column in the q-grid.
 *
 * ### Usage
 *
 * ``` javascript
 * gridModel.data({
 *    columns: [
 *    {
 *	     key: 'id',
 *	  	 title: 'ID',
 *		 type: 'id',
 *		 editor: 'number'
 *	  },
 *    {
 *	     key: 'avatar',
 *		 title: 'Avatar',
 *		 type: 'image',
 *		 width: 80,
 *		 value: (item, value) => isUndef(value) ? item.avatar : item.avatar = value,
 *		 labelPath: 'avatarFileName'
 *	  },
 *	  {
 *	     key: 'name.last',
 *		 title: 'Last Name',
 *		 type: 'text',
 *		 path: 'name.last'
 *	  },
 *	  {
 *	     key: 'gender',
 *		 title: 'Gender',
 *		 type: 'text',
 *		 value: (item, value) => isUndef(value) ? item.gender : item.gender = value,
 *		 editor: 'dropdown',
 *		 editorOptions: {
 *		    fetch: ['female', 'male']
 *		 }
 *	  },
 *	  {
 *	     key: 'birthday',
 *		 title: 'Birthday',
 *		 type: 'date'
 * 	  },
 *	  {
 *	     key: 'comment',
 *		 title: 'Comment',
 *		 type: 'text',
 *		 editor: 'text-area',
 *		 width: 200,
 *		 maxLength: 8000
 *	  },
 *	  {
 *		 key: 'password',
 *		 title: 'Password',
 *		 type: 'password',
 *		 isDefault: false
 *	  },
 *	  {
 *	     key: 'teammates',
 *		 title: 'Teammates',
 *		 type: 'reference',
 *		 editorOptions: {
 *		    modelFactory: () => {
 *			   const model = qgrid.model();
 *			   model
 *                .selection({
 *			         mode: 'multiple',
 *				     unit: 'row'
 *			      })
 *				  .columnList({
 *				     generation: 'deep'
 *				  })
 *				  .data({
 *				     rows: ctrl.rows
 *				  });
 *
 *			      return model;
 *			   }
 *			}
 *		},
 *		{
 *		   key: 'contact.address.zip',
 *		   title: 'Zip',
 *		   type: 'number',
 *		   path: 'contact.address.zip',
 *		   width: 70,
 *		   isDefault: false
 *		},
 *		{
 *		   key: 'contact.phone',
 *		   title: 'Contact Phones',
 *		   type: 'array',
 *		   path: 'contact.phone',
 *		   width: 250
 *		},
 *		{
 *		   key: 'contact.email.primary',
 *		   title: 'Primary Email',
 *         type: 'email'
 *      },
 *		{
 *			key: 'contact.email.secondary',
 *			title: 'Secondary Email',
 *			type: 'email',
 *			editor: 'autocomplete',
 *			editorOptions: {
 *                fetch: (item, d, search = '') =>
 *                    new Promise(resolve => resolve(['foo@bar.ru']))
 *			}
 *		},
 *		{
 *		   key: 'salary',
 *		   title: 'Salary',
 *		   type: 'currency'
 *		}
 *		{
 *		   key: 'modifiedTime',
 *		   title: 'Modified Time',
 *		   type: 'time'
 *		},
 *		{
 *		   key: 'webPage',
 *		   title: 'Web Page',
 *		   type: 'url'
 *		},
 *		{
 *		   key: 'attachment',
 *		   title: 'Attachment',
 *		   type: 'file'
 *		},
 *		{
 *		   key: 'isOnline',
 *		   title: 'Online',
 *	       type: 'bool'
 *		}]
 * });
 * ```
 *
 * ### Suggested Links
 *
 * * [value.js](https://github.com/qgrid/ng2/blob/master/core/services/value.js)
 * * [label.js](https://github.com/qgrid/ng2/blob/master/core/services/label.js)
 * * [column.pipe.js](https://github.com/qgrid/ng2/blob/master/core/pipe/column.pipe.js)
 */
export declare class ColumnModel {
	/**
	 * Type of column. Beside below list user is free to define own column type.
	 * Be aware that some column types are used for internal purposes.
	 * - `array`
	 * - `bool`
	 * - `currency`
	 * - `date`
	 * - `email`
	 * - `file`
	 * - `filter-row`
	 * - `group`
	 * - `id`
	 * - `image`
	 * - `number`
	 * - `pad`
	 * - `pivot`
	 * - `reference`
	 * - `row-details`
	 * - `row-expand`
	 * - `row-indicator`
	 * - `row-number`
	 * - `row-options`
	 * - `select`
	 * - `summary`
	 * - `text`
	 * - `time`
	 * - `url`
	 */
	type?: string;

	/**
	 * Column identifier, should be unique across all columns. If path is not setup, key property is used
	 * to retrieve a cell value.
	 */
	key?: string;

	/**
	 * Column header text, also can be shown as column tooltip, or used in plugins like column filter plugin.
	 */
	title?: string;

	/**
	 * Getter, setter for a cell value. If the value property is setup, it is used to get/set cell value.
	 */
	value?: (row: any, value?: any) => any;

	$value?: (row: any, value?: any) => any;

	/**
	 * Path to the value. Example is `address.phones.0.num`, if `path` property is setup, it is used
	 * to get/set cell value, but it has a lower priority than column `value` property.
	 */
	path?: string;

	/**
	 * Indicates if column should be frozen.
	 * - `'left'` - freeze a column to the grid's left.
	 * - `'right'` - freeze a column to the grids'right.
	 * - `null` - do not freeze  a column.
	 */
	pin?: null | 'left' | 'right';

	origin?: string;

	/**
	 * Place where a column was created.
	 *
	 * * `'generation'` was auto-generated by the q-grid.
	 * * `'template'` was defined by user in the html template.
	 * * `'user'` was defined by user in the javascript/typescript.
	 */
	source?: string;

	/**
	 * A functional type of a the column.
	 *
	 *  * `'control'` behavior controllers (e.g. `select` type column).
	 *  * `'data'` real user data.
	 *  * `'markup'` used for the internal markup needs (e.g. `pad` type column).
	 *  * `'pivot'`multi head pivot.
	 */
	class?: 'data' | 'control' | 'markup' | 'pivot';

	/**
	 * Editor type, will be shown in cell edit mode instead of default column type editor.
	 * For instance, it can be used for id type column `<q-grid-column type="id" editor="number">`
	 */
	editor?: string;

	/**
	 * Options for cell edit mode.
	 */
	editorOptions?: EditorOptions;

	/**
	 * Width of the q-grid column.
	 *
	 * * Can be setup in `pixels` like `<q-grid-column width="100">`.
	 * * Can be setup in `persents` like `<q-grid-column width="20%"`.
	 *
	 * Percents are materialized only once on init, and depend on the q-grid size.
	 */
	width?: number | string;

	/**
	 * Minimal width of the column.
	 */
	minWidth?: number;

	/**
	 * Maximum width of the column.
	 */
	maxWidth?: number;

	/**
	 * If set, column width will be expanded to this value on focus.
	 */
	viewWidth?: number;

	widthMode?: string;

	/**
	 * Indicates if cells in the column are editable.
	 */
	canEdit?: boolean;

	/**
	 * Indicates if column is resizable.
	 */
	canResize?: boolean;

	/**
	 * Indicates if sorting can be applied to the column.
	 * `Column sort` plugin is used this property to enable/disable sort arrow icons.
	 */
	canSort?: boolean;

	/**
	 * Indicates if drang and drop is allowed for the column.
	 */
	canMove?: boolean;

	/**
	 * Indicates if data in the column can be filtered.
	 * `Column filter` plugin is used this property to enable/disable filter icon.
	 */
	canFilter?: boolean;

	/**
	 * Indicates if underneath column cells should be highlighted when mouse is over column header.
	 */
	canHighlight?: boolean;

	/**
	 * Indicates if column cells can take focus.
	 */
	canFocus?: boolean;

	/**
	 * Indicates if column is visible or not.
	 */
	isVisible?: boolean;

	/**
	 * Indicates the order of the column.
	 */
	index?: number;

	/**
	 * Indicates what text should be shown in the cell. If property is not set column value is used.
	 * Also `filter plugin` uses this property to show list of items and for filter application.
	 */
	label?: (row: any, value?: any) => string | any;

	/**
	 * Path to the label. Example is `address.phones.0.num`, if `labelPath` property is setup, it is used
	 * to get/set cell label, but it has a lower priority than column `label property.
	 */
	labelPath?: string;

	/**
	 * This function is used by `column sort` pipe to order row values.
	 */
	compare?: (x: any, y: any) => number;

	/**
	 * If children property is setup the column automatically becomes a group container.
	 */
	children?: ColumnModel[]

	$label?: (row: any, value?: any) => any | any;
}

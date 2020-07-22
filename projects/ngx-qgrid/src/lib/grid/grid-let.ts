import { Injectable } from '@angular/core';
import { BodyLet } from '@qgrid/core/body/body.let';
import { CommandLet } from '@qgrid/core/command/command.let';
import { CommandManager } from '@qgrid/core/command/command.manager';
import { EditLet } from '@qgrid/core/edit/edit.let';
import { FilterLet } from '@qgrid/core/filter/filter.let';
import { FootLet } from '@qgrid/core/foot/foot.let';
import { Grid } from './grid';
import { GridPlugin } from '../plugin/grid-plugin';
import { GroupLet } from '@qgrid/core/group/group.let';
import { HeadLet } from '@qgrid/core/head/head.let';
import { HighlightLet } from '@qgrid/core/highlight/highlight.let';
import { LayoutLet } from '@qgrid/core/layout/layout.let';
import { NavigationLet } from '@qgrid/core/navigation/navigation.let';
import { PaginationLet } from '@qgrid/core/pagination/pagination.let';
import { RowDetailsLet } from '@qgrid/core/row-details/row.details.let';
import { RowLet } from '@qgrid/core/row/row.let';
import { ScrollLet } from '@qgrid/core/scroll/scroll.let';
import { ScrollService } from '../scroll/scroll.service';
import { SelectionLet } from '@qgrid/core/selection/selection.let';
import { SortLet } from '@qgrid/core/sort/sort.let';
import { viewFactory } from '@qgrid/core/view/view.factory';

@Injectable()
export class GridLet {
	body: BodyLet;
	command: CommandLet;
	edit: EditLet;
	filter: FilterLet;
	foot: FootLet;
	group: GroupLet;
	head: HeadLet;
	highlight: HighlightLet;
	layout: LayoutLet;
	nav: NavigationLet;
	pagination: PaginationLet;
	row: RowLet;
	rowDetails: RowDetailsLet;
	scroll: ScrollLet;
	selection: SelectionLet;
	sort: SortLet;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from 'e2e4';

export { MISC_DIRECTIVES } from './misc-directives/index';
import { MISC_DIRECTIVES } from './misc-directives/index';

export { RtListService, RtBufferedPager, RtPagedPager, RtRegularPager, RtSortingsService, RtFiltersService, RtQueryStringStateService } from './providers/index';

export { SELECTION_DIRECTIVES } from './selection-directives/index';
import { SELECTION_DIRECTIVES } from './selection-directives/index';
import { LIST_DIRECTIVES, BufferedListComponent, PagedListComponent, ListComponent } from './list-directives/index';

export { BUFFERED_FOOTER_DIRECTIVES, PAGED_FOOTER_DIRECTIVES, REGULAR_FOOTER_DIRECTIVES } from './list-directives/index';
import { BUFFERED_FOOTER_DIRECTIVES, PAGED_FOOTER_DIRECTIVES, REGULAR_FOOTER_DIRECTIVES } from './list-directives/index';

export { LIST_DIRECTIVES } from './list-directives/index';
export var PAGED_LIST_DIRECTIVES: any[] = LIST_DIRECTIVES.concat(PAGED_FOOTER_DIRECTIVES).concat([PagedListComponent]);
export var BUFFERED_LIST_DIRECTIVES: any[] = LIST_DIRECTIVES.concat(BUFFERED_FOOTER_DIRECTIVES).concat([BufferedListComponent]);
export var REGULAR_LIST_DIRECTIVES: any[] = LIST_DIRECTIVES.concat(REGULAR_FOOTER_DIRECTIVES).concat([ListComponent]);

@NgModule({
    declarations: MISC_DIRECTIVES,
    exports: MISC_DIRECTIVES,
    imports: [CommonModule]
})
export class RTMiscModule { }

@NgModule({
    declarations: SELECTION_DIRECTIVES,
    exports: SELECTION_DIRECTIVES,
    imports: [CommonModule]
})
export class RTSelectionModule { }

@NgModule({
    declarations: [PAGED_LIST_DIRECTIVES, BUFFERED_LIST_DIRECTIVES, REGULAR_LIST_DIRECTIVES],
    exports: [PAGED_LIST_DIRECTIVES, BUFFERED_LIST_DIRECTIVES, REGULAR_LIST_DIRECTIVES],
    imports: [CommonModule]
})
export class RTListModule { }

import { Component } from '@angular/core';

import { SHARED_DIRECTIVES, AirportsService, AirportsListRequest } from '../shared';

@Component({
    directives: [SHARED_DIRECTIVES],
    moduleId: module.id,
    templateUrl: 'regular-list-sample.component.html'
})
export class RegularListSampleComponent {
    constructor(public airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsRegular(requestParams);
    };
}

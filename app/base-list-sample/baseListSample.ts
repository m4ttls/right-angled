import {Component, OnInit} from 'angular2/core';
import {AirportsService} from './airportsService';
import {E2E4List} from '../e2e4-angular/e2e4List';
import {E2E4PagedList} from '../e2e4-angular/e2e4PagedList';
import {E2E4LoadButton} from '../e2e4-angular/e2e4LoadButton';
import {E2E4RowNumber} from '../e2e4-angular/e2e4RowNumber';
import {E2E4BufferedList} from '../e2e4-angular/e2e4BufferedList';
import {E2E4Sort} from '../e2e4-angular/e2e4Sort';

@Component({
    directives: [E2E4List, E2E4PagedList, E2E4BufferedList, E2E4LoadButton, E2E4RowNumber, E2E4Sort],
    providers: [AirportsService],
    templateUrl: 'app/base-list-sample/baseListSample.html'
})
export class BaseListSample implements OnInit {
    message: string = 'Hello';
    airportsService: AirportsService;
    items: Array<any> = new Array<any>();
    constructor(listComponentService: AirportsService) {
        this.airportsService = listComponentService;
    }
    ngOnInit(): void {
        // this.airportsService.getAirportsPaged({ sort: [] }).then(result => { this.items = result.items; });
    }
    loadData = (requestParams: any): Promise<any> => {
        return this.airportsService.getAirportsPaged(requestParams).then(result => {
            this.items = result.items;
            return result;
        }); };
}
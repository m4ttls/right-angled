import { Component } from '@angular/core';

import { CodeTabComponent } from './code-tab.component';
import { SampleTabComponent } from './sample-tab.component';
import { Tab } from './tab-base';

@Component({
    moduleId: module.id,
    selector: 'rt-demo-tab-section',
    styleUrls: ['tab-section.component.css'],
    template: `
    <ul>
        <li *ngFor="let tab of tabs" (click)="pick(tab)" [class.active]="tab.isActive">
            <button class="btn btn-primary">{{ tab.tabTitle }}</button>
        </li>
    </ul>
    <div class="tab-content">
        <ng-content></ng-content>
    </div>
  `
})
export class TabSectionComponent {
    public tabs: Tab[] = [];
    public addTab(tab: Tab): void {
        if (this.tabs.length === 0) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    }
    public pick(selectedTab: Tab): void {
        this.tabs.forEach((tab) => {
            tab.isActive = false;
        });
        selectedTab.isActive = true;
    }
}

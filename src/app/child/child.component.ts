import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ReportsDataSourceService } from '../reportsdatasource.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit {
  private dataSource: Object | null = null;

  constructor(private reportsDataSourceService: ReportsDataSourceService) {
    console.log('I am in the depency report file!');
  }

  ngOnInit(): void {
    console.log('Child component is inited will get data from service');
    this.dataSource = this.reportsDataSourceService.getDataSource();
    console.log('this.dataSource:', this.dataSource);
  }
}

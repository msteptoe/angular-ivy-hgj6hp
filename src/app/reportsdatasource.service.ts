import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportsDataSourceService {
  private dataSource: Object | null = null;
  public onDataChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    console.log('I am in the datasource service!');
  }

  generateSourceData(depReportList: Array<{}>): void {
    this.dataSource = { depReportList };
    this.onDataChanged.next(this.dataSource);
  }

  getDataSource() {
    return this.dataSource;
  }
}

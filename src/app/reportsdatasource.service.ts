import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReportsDataSourceService {
  private dataSource: Object | null = null;

  constructor() {
    console.log('I am in the datasource service!');
  }

  generateSourceData(depReportList: Array<{}>): void {
    this.dataSource = { depReportList };
  }

  getDataSource() {
    return this.dataSource;
  }
}

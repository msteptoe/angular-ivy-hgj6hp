import { Injectable } from '@angular/core';

@Injectable()
export class ReportsDataSourceService {
  private dataSource: Object | null = null;

  constructor() {
    console.log('I am in the datasource service!');
  }

  geenrateSourceData(depReportList: Array<{}>): void {
    this.dataSource = { depReportList };
  }

  getDataSource() {
    return this.dataSource;
  }
}

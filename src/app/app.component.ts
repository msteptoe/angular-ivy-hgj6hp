import { Component, VERSION } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReportsDataSourceService } from './reportsdatasource.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showFlag = false;
  showReportInfo = false;
  dataSource = null;

  constructor(
    private http: HttpClient,
    private reportsDataSourceService: ReportsDataSourceService
  ) {}

  onSave(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    this.http
      .get('https://ruitest.free.beeceptor.com', {
        responseType: 'text',
      })
      .subscribe((data) => {
        console.log('MockWebRequest Reponse:', data);

        this.dataSource = [{}, {}];
        this.reportsDataSourceService.generateSourceData(this.dataSource);

        this.showReportInfo = true;
        this.showFlag = true;
      });
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ReportsDataSourceService } from '../reportsdatasource.service';

@Component({
  selector: 'app-child-subject',
  templateUrl: './child-subject.component.html',
  // styleUrls: [ './child.component.css' ]
})
export class ChildSubjectComponent implements OnInit {
  private onDataChanged: Subscription;
  showFlag = false;

  constructor(private reportsDataSourceService: ReportsDataSourceService) {
    console.log('I am in the depency report file!');
  }

  ngOnInit(): void {
    this.onDataChanged = this.reportsDataSourceService.onDataChanged.subscribe(
      (data) => {
        console.log('child subject recieved onDataChanged:', data); // access to shared data :)

        if (data) {
          console.log('Updating showFlag');
          this.showFlag = true;
        }
      }
    );
  }
}

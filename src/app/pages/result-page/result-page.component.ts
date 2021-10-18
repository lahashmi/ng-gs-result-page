import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/interfaces/result.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  public results: Array<IResult>;
  constructor(private _data: DataService) {
    this.results = [];
  }

  ngOnInit(): void {
    this.results = this._data.getResults();
  }
}

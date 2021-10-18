import { Component, Input, OnInit } from '@angular/core';
import { IResult } from 'src/app/interfaces/result.interface';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() data!: IResult;
  constructor() {}

  ngOnInit(): void {}
}

import { Injectable } from '@angular/core';
import { IResult } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  /**
   * getResults method
   * @returns results array
   */
  getResults(): Array<IResult> {
    const results = [
      {
        title: "Taylor's University World Class Scholarship",
        subTitle: "Provided by Taylor's University",
        description:
          'Lorem ipsum dolor sit amet, at salutatus necessitatibus quo, ea meis tritani has. Quas inte. Cumio u fierent consetetur. Ad sanctus delenit debitis mel. Lorem ipsum dolor sit amet, at salu quo.',
        imageUrl: '../../../assets/images/result-item-1.svg',
        deadline: '18 March 2020',
        studyLevel: 'Degree | Postgraduate',
        validity: 'Domestic & International',
        intake: 'May 2010',
        amount: 2915,
      },
      {
        title: 'Summer Research Scholarship',
        subTitle: "Provided by Taylor's University",
        description:
          'Lorem ipsum dolor sit amet, at salutatus necessitatibus quo, ea meis tritani has. Quas inte. Cumio u fierent consetetur. Ad sanctus delenit debitis mel. Lorem ipsum dolor sit amet, at salu quo.',
        imageUrl: '../../../assets/images/result-item-2.svg',
        deadline: '18 March 2020',
        studyLevel: 'Degree | Postgraduate',
        validity: 'Domestic & International',
        intake: 'May 2010',
        amount: 2915,
      },
      {
        title: 'Postgraduate Research Scholarship',
        subTitle: "Provided by Taylor's University",
        description:
          'Lorem ipsum dolor sit amet, at salutatus necessitatibus quo, ea meis tritani has. Quas inte. Cumio u fierent consetetur. Ad sanctus delenit debitis mel. Lorem ipsum dolor sit amet, at salu quo.',
        imageUrl: '../../../assets/images/result-item-3.svg',
        deadline: '18 March 2020',
        studyLevel: 'Degree | Postgraduate',
        validity: 'Domestic & International',
        intake: 'May 2010',
        amount: 2915,
      },
      {
        title: "Taylor's University Mechanical Engineering Scholarship",
        subTitle: "Provided by Taylor's University",
        description:
          'Lorem ipsum dolor sit amet, at salutatus necessitatibus quo, ea meis tritani has. Quas inte. Cumio u fierent consetetur. Ad sanctus delenit debitis mel. Lorem ipsum dolor sit amet, at salu quo.',
        imageUrl: '../../../assets/images/result-item-4.svg',
        deadline: '18 March 2020',
        studyLevel: 'Degree | Postgraduate',
        validity: 'Domestic & International',
        intake: 'May 2010',
        amount: 2915,
      },
      {
        title: 'The Gates Scholarship',
        subTitle: "Provided by Taylor's University",
        description:
          'Lorem ipsum dolor sit amet, at salutatus necessitatibus quo, ea meis tritani has. Quas inte. Cumio u fierent consetetur. Ad sanctus delenit debitis mel. Lorem ipsum dolor sit amet, at salu quo.',
        imageUrl: '../../../assets/images/result-item-1.svg',
        deadline: '18 March 2020',
        studyLevel: 'Degree | Postgraduate',
        validity: 'Domestic & International',
        intake: 'May 2010',
        amount: 2915,
      },
    ];
    return results;
  }
}

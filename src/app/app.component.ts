import { Component } from '@angular/core';

export interface CustomOption {
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'morpheus';
  selectedRule = 1;
  rulesOptions: CustomOption[] = [{id: 1, name:'All Pages'}, {id:2, name:'Home Page'}, {id:3, name:'Product Pages'}, {id:4, name:'Password Page'}, {id:5, name:'Custom'}];
  inclusionRules = [{id: 1}];
  exclusionRules = [{id: 4}];
  customOptions: CustomOption[] = [{id:1, name: 'Contains'}, {id: 2, name: 'Exact Match'}];

  newInclusionRule() {
    this.inclusionRules.push({id: 1});
  }

  deleteInclusionRule(index: number) {
    this.inclusionRules.splice(index, 1);
  }

  newExclusionRule() {
    this.exclusionRules.push({id: 1});
  }

  deleteExclusionRule(index: number) {
    this.exclusionRules.splice(index, 1);
  }


}

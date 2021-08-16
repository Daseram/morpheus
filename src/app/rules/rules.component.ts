import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomOption } from '../app.component';

export interface Rule {
  id: number,
  url?: string,
  optionalRuleId?: number
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})

export class RulesComponent implements OnInit {

  @Input() rulesOptions: CustomOption[];

  @Input() selectedRule: Rule;

  @Input() customOptions: CustomOption[];

  @Output() deleteRule = new EventEmitter<any>();

  urlRule;

  invalidUrl = false;

  hoverDelete = false;

  constructor() { }

  ngOnInit() {
  }

  deleteSelectedRule() {
    this.deleteRule.emit(null);
  }

  validateUrl() {
    this.invalidUrl = false;
    if(!this.urlRule){
      this.invalidUrl = true;
    }
  }

}

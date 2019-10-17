import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../models/evaluation';

@Component({
  selector: 'app-evaluation-detail',
  templateUrl: './evaluation-detail.component.html',
  styleUrls: ['./evaluation-detail.component.css']
})
export class EvaluationDetailComponent implements OnInit {

  @Input() evaluation: Evaluation;

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEvaluation();
  }

  getEvaluation(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.paramMap.get('id');
    this.evaluationService.getEvaluation(id)
      .subscribe(evaluation => this.evaluation = evaluation);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.goBack();
    this.evaluationService.updateEvaluation(this.evaluation)
      .subscribe(() => 
        //this.goBack();
        alert('Changes were made to Evaluation. A confirmation email has been sent.')
        );
  }

}

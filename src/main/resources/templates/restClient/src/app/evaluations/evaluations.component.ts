import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../models/evaluation';
import { EvaluationService } from '../evaluation.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  evaluations: Evaluation[];

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.getEvaluations();
  }

  getEvaluations(): void {
    this.evaluationService.getEvaluations()
    .subscribe(heroes => this.evaluations = heroes);
  }

  delete(evaluation: Evaluation): void {
    this.evaluations = this.evaluations.filter(p => p !== evaluation);
    this.evaluationService.deleteEvaluation(evaluation).subscribe();
  }
}

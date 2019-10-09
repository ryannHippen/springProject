import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../models/evaluation';
import { EvaluationService } from '../evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  evaluation: Evaluation[];

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.getEvaluation();
  }

  getEvaluation(): void {
    this.evaluationService.getEvaluations()
    .subscribe(heroes => this.evaluation = heroes);
  }

  delete(evaluation: Evaluation): void {
    this.evaluation = this.evaluation.filter(p => p !== evaluation);
    this.evaluationService.deleteEvaluation(evaluation).subscribe();
  }
}

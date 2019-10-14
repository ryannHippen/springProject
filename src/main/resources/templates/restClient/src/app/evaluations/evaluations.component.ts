import { Component, OnInit } from '@angular/core';
import { Evaluation } from '../models/evaluation';
import { Profile } from '../models/profile';
import { EvaluationService } from '../evaluation.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  evaluations: Evaluation[];
  profile: Profile[];

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.getEvaluations();
  }

  getEvaluations(): void {
    this.evaluationService.getEvaluations()
    .subscribe(evaluation => this.evaluations = evaluation);
  }

  delete(evaluation: Evaluation): void {
    this.evaluations = this.evaluations.filter(p => p !== evaluation);
    this.evaluationService.deleteEvaluation(evaluation).subscribe();
  }
}

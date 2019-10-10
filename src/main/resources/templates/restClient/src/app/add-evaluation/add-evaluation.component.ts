import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../models/evaluation';


@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation = new Evaluation();

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private location: Location
  ) { }



  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

  addEvaluation(): void {
    this.evaluationService.addEvaluation(this.evaluation)
        .subscribe( data => {
          alert("Evaluation created successfully.");
          this.goBack();
        });
  }

}

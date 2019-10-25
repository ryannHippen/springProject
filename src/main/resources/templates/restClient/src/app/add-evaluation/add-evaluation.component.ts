import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, PathLocationStrategy } from '@angular/common';

import { EvaluationService } from '../evaluation.service';
import { Evaluation } from '../models/evaluation';
import { PassIdService } from '../pass-id.service';
import { PassEmailService } from '../pass-email.service';


@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation = new Evaluation();

  id: number;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private location: Location,
    private data: PassIdService,
    private passEmail: PassEmailService
  ) { }

  ngOnInit(): void {
    this.data.currentId.subscribe(id => this.id = id);
    this.evaluation.evaluationId = this.id;
    this.evaluation.profileProfileId = this.id;
    this.passEmail.currentEmail.subscribe(email => this.email = email);
    this.evaluation.email = this.email;
  }

  goBack(): void {
    this.location.back();
  }

  addEvaluation(): void {
    this.goBack();
    this.evaluationService.addEvaluation(this.evaluation)
        .subscribe( data => {
          alert('Evaluation was created. A confirmation email has been sent.');
        });
  }

}

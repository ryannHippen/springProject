import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private location: Location
  ) {}

  title = 'Resource Management';


  public getClass(path) {
    return (this.location.path().substr(0, path.length) === path) ? 'active' : '';
  }
}


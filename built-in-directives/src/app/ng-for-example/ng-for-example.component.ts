import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
	animals: string[] = ["Elephant", "Monkey", "Dog", "Wolf", "Giraffe"];

  constructor() { }

  ngOnInit() {
  }

}

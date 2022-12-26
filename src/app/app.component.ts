import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thiangular';
  inbox:any = [
    {
      "id": 0,
      "name": "Gemma Roberson",
      "status": "Bacco for late repon",
      "text": "Hello Cotaee",
    },
    {
      "id": 1,
      "name": "adam Roberson",
      "status": "Angry for late repon",
      "text": "Hello Cotaee",
    },
    {
      "id": 2,
      "name": "cotoa Roberson",
      "status": "Bonsavic for late repon",
      "text": "Hello Cotaee",
    },
    {
      "id": 3,
      "name": "bimbim Roberson",
      "status": "buload for late repon",
      "text": "Hello Cotaee",
    },
    {
      "id": 4,
      "name": "Senua Roberson",
      "status": "Hellodas for late repon",
      "text": "Hello Cotaee",
    },
  ]
}

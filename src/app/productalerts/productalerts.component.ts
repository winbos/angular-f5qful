import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-productalerts',
  templateUrl: './productalerts.component.html',
  styleUrls: ['./productalerts.component.css']
})
export class ProductalertsComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
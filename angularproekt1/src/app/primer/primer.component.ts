import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-primer',
  standalone: true,
  imports: [],
  templateUrl: './primer.component.html',
  styleUrl: './primer.component.css'
})
export class PrimerComponent implements OnInit {
  constructor() {}
  @Input()
  ime:String="";
  ngOnInit(): void {
    
  }
}

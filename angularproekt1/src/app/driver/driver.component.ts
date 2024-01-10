import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent{


@Input()
vozac:Driver = {} as Driver;

@Input()
reden:Number = 0;


@Output()
cuci = new EventEmitter<any>();
newStyle: Record<string,string>={};
backgroundStyle: Record<string,string>={};
klasi(){
  var zname;
  if(this.vozac.category=="begginer")
  zname=true;
  else
  zname=false;
  return {'poz':zname,'course-card':true}

}
klik(){
  var kategorija;
  kategorija:this.vozac.category;
  this.newStyle={
    'color':'blue',
    'font-size':'30px'
  }
  this.backgroundStyle={
    'background-color':'green',
    'font-size':'30px'
  }
}

}

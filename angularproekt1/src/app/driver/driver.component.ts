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

klasi(){
  var zname;
  if(this.vozac.category=="begginer")
  zname=true;
  else
  zname=false;
  return {'poz':zname,'course-card':true}

}
backgroundStyle(){
if(this.vozac.category=="begginer")
return {'background-color':'green', 'font-size':'30px','color':'blue', 'font-weight':'10'}
else 
return {'background-color':'gold', 'font-size':'30px','color':'black', 'font-weight':'800'}
}
klik(){
  var link=this.vozac.iconUrl;
  window.open(link,"_blank");
  this.cuci.emit(this.vozac);

}

}

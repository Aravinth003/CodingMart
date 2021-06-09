import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Districtsearch';
  district : any = [];
  maxA = 0;
  maxP = 0;
  form = new FormGroup({
    dname : new FormControl('',Validators.required),
    area : new FormControl('',Validators.required),
    popul: new FormControl('',Validators.required)
  });
  Submit(){
    var d = this.form.value;
    this.district.push(d);
    if(d.area > this.maxA){
      this.maxA = d.area;
    }
    if(d.popul > this.maxP){
      this.maxP = d.popul;
    }
    console.log(this.district);
  }
}

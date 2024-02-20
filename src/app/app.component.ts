import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    // setTimeout(()=>{
    //   this.calcPopUp = true
    // }, 5000)
  }

  title = 'wisepath';
  calcPopUp= false;

  closeCaclPopup(){
    this.calcPopUp = false;
  }
}

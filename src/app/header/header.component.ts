import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data = [];
   
  addData(data){
    this.data.push(data);
  }

  removeData(){
    return this.data.pop();
  }
}

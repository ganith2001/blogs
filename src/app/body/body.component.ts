import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myimage:string="assets/img10.jpg";
  public btn="Read more";
  onclick(){
    
    var moreText = document.getElementById("more");
  
    if(this.btn=="Read more"){
      moreText.style.display = "inline";
     this.btn="Read less";
    
    }
    else
    {
      this.btn="Read more";
    
     
      moreText.style.display = "none";
    }
    
  }
}

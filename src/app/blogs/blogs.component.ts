import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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

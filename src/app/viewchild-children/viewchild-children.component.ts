import { Component, ElementRef, ViewChild , OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild-children',
  templateUrl: './viewchild-children.component.html',
  styleUrls: ['./viewchild-children.component.scss']
})
export class ViewchildChildrenComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.markedr)
  }

  @ViewChildren('reff')  markedr!:ElementRef 
}



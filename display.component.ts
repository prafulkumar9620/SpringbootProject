import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comments } from '../Comments';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:CommentService) { }

  comments: Comments[]=[
    {'cid':9001,'commenter':'sunil','pid':1001,'comment':'your notes is so simple'},
    {'cid':9002,'commenter':'kishore','pid':1001,'comment':'please give elaborated discussion'},
    {'cid':9003,'commenter':'sunil','pid':1002,'comment':'most time waste topic for india'},
    {'cid':9004,'commenter':'kishore','pid':1002,'comment':'Teenages must have good knowledge on politics'},
    {'cid':9005,'commenter':'Anjali','pid':1004,'comment':'Can you explain more on this'}

  ];
  tcomments:any;

  ngOnInit(): void {
  }
  getComments(){
    this.service.getAllComments()
    .subscribe( response =>{
      this.tcomments=response;
      console.log(response);
    });
  
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comments } from '../Comments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cid=9001;
  commenter='sunil';
  pid=1001;
  comment=' your notes is so simple';
  

  constructor(private service: CommentService) { }

  ngOnInit(): void {
   

  }
  

  postComment(){
    let comment : Comments = {
      "cid":this.cid,
      "commenter":this.commenter,
      "pid":this.pid,
      "comment":this.comment
    }
    
    this.service.postComment(comment);
    // write the code for the springboot connectivity
    console.log(comment.comment);
    
  }
  }

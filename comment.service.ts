import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './Comments';
// import { of } from 'rxjs';
// import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient ) { }

  getAllComments(){
   // console.log('inside the angular service method..');
     return  this.httpClient.get("http://localhost:8083/comments/all");
  }

  postComment(comment:Comments){
      console.log('inside the angular service method..');

      this.httpClient.post("http://localhost:8083/comments/add",comment) 
      .subscribe(
      
          response =>{
              console.log('hello');
              console.log(response);
          },
          error =>{
              console.log(error);
              
          });
          
        //   of([1,2,3]).subscribe({
        //     next: (v) => console.log(v),
        //     error: (e) => console.error(e),
        //     complete: () => console.info('complete') 
        // })
        // .subscribe({
        //     complete: () => { ... }, // completeHandler
        //     error: () => { ... },    // errorHandler 
        //     next: () => { ... },     // nextHandler
        //     someOtherProperty: 42
        // });
  }
}


function next(next: any, arg1: (v: any) => void) {
    throw new Error('Function not implemented.');
}


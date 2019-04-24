import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }
/* 
  getTodos():Observable<Todo[]>{
    this.http.get<Todo[]>(this.todosURL);

  } */




}

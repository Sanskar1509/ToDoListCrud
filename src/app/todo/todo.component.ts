import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any[]=[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({idField:'id'})
    .subscribe(item=>{
      this.todos=item.sort((a:any,b:any)=>{ return a.isDone -b.isDone});
    })
  }

  onclick(titleInput: HTMLInputElement){
    if(titleInput.value){
      this.todoService.addTodo(titleInput.value);
      titleInput.value = "";
    }
  }

  onStatusChanges(id:string , newstatus: boolean){
    this.todoService.updateTodoStatus(id,newstatus)
  }

  onDelet(id:string){
    this.todoService.deletTodo(id);
  }
  
}

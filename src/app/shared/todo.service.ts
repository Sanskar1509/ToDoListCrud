import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 firestoreCollection: AngularFirestoreCollection;
  constructor(firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('todos');
  }

  addTodo(title: string){
    this.firestoreCollection.add({
      title,isDone: false
    })
  }

  updateTodoStatus(id:string, newstatus:boolean){
    this.firestoreCollection.doc(id).update({isDone:newstatus});
  }

  deletTodo(id:string){
    this.firestoreCollection.doc(id).delete()
  }
}

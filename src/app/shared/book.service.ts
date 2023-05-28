import { Injectable } from '@angular/core';
import { Book } from '../shared/Book';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private db: AngularFireDatabase) { }
  bookListRef!: AngularFireList<any>;
  bookRef!: AngularFireObject<any>;

  createBooking(apt: Book) {
    this.bookListRef = this.db.list('/book');
    return this.bookListRef.push({
      titulo: apt.titulo,
      editora: apt.editora,
      author: apt.author,
      ano_publicacao: apt.ano_publicacao,
      edicao: apt.edicao,
      lingua: apt.lingua,
    });
  }

  getBooking(id: string){
    this.bookRef = this.db.object('/book/' + id);
    return this.bookRef
  }

  getBookList(){
    this.bookListRef = this.db.list('/book');
    return this.bookListRef;
  }

  updateBooking(apt: Book){
    console.log(this.bookRef)

    return this.bookRef.update({
      titulo: apt.titulo,
      editora: apt.editora,
      author: apt.author,
      ano_publicacao: apt.ano_publicacao,
      edicao: apt.edicao,
      lingua: apt.lingua,
    });
  }

  deleteBooking(id: string){
    this.bookRef = this.db.object('/book/' + id);
    this.bookRef.remove()
  }
}

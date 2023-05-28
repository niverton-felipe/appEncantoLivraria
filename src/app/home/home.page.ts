import { Component } from '@angular/core';
import { Book } from '../shared/Book'
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Bookings : Book[] = [];
  constructor(
    private aptService: BookService
  ) {}
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a : any = item.payload.toJSON();
        a['$key'] = item.key;
        
     
        this.Bookings.push(a as Book);
      })
    })
  }

  fetchBookings(){
    this.aptService.getBookList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id : string) {
    console.log(id)
    if (window.confirm("DO you really want to delete?"))
    this.aptService.deleteBooking(id)
  }
}


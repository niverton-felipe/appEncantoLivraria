import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.page.html',
  styleUrls: ['./book-create.page.scss'],
})
export class BookCreatePage implements OnInit {

  bookingForm!: FormGroup;
  constructor(
    private aptService: BookService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      titulo: [''],
      editora: [''],
      author: [''],
      ano_publicacao: [''],
      edicao: [''],
      lingua: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
        return false;
    }
  }

}

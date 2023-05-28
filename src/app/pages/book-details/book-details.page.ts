import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/shared/book.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  updateBookingForm!: FormGroup;
  id!: any;

  constructor(
    private aptService: BookService,private actRoute: ActivatedRoute,
    private router: Router,public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
      console.log(res)
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      titulo: [''],
      editora: [''],
      author: [''],
      ano_publicacao: [''],
      edicao: [''],
      lingua: ['']


    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBooking(this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}

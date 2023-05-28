import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-book-see-details',
  templateUrl: './book-see-details.page.html',
  styleUrls: ['./book-see-details.page.scss'],
})
export class BookSeeDetailsPage implements OnInit {

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
    this.router.navigate(['/home']);

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookSeeDetailsPageRoutingModule } from './book-see-details-routing.module';

import { BookSeeDetailsPage } from './book-see-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookSeeDetailsPageRoutingModule
  ],
  declarations: [BookSeeDetailsPage]
})
export class BookSeeDetailsPageModule {}

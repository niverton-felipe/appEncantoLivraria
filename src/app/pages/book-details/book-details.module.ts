import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPageRoutingModule } from './book-details-routing.module';

import { BookDetailsPage } from './book-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookDetailsPageRoutingModule
  ],
  declarations: [BookDetailsPage]
})
export class BookDetailsPageModule {}

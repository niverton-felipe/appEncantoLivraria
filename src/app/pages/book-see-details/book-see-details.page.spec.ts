import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSeeDetailsPage } from './book-see-details.page';

describe('BookSeeDetailsPage', () => {
  let component: BookSeeDetailsPage;
  let fixture: ComponentFixture<BookSeeDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookSeeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

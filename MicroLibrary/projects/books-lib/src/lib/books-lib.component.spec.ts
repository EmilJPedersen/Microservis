import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLibComponent } from './books-lib.component';

describe('BooksLibComponent', () => {
  let component: BooksLibComponent;
  let fixture: ComponentFixture<BooksLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

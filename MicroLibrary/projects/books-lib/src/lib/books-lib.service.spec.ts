import { TestBed } from '@angular/core/testing';

import { BooksLibService } from './books-lib.service';

describe('BooksLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksLibService = TestBed.get(BooksLibService);
    expect(service).toBeTruthy();
  });
});

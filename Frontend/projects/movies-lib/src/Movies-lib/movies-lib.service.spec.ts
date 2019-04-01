import { TestBed } from '@angular/core/testing';

import { moviesLibService } from './movies-lib.service';

describe('MoviesLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: moviesLibService = TestBed.get(moviesLibService);
    expect(service).toBeTruthy();
  });
});

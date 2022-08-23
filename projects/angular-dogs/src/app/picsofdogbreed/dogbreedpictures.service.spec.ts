import { TestBed } from '@angular/core/testing';

import { DogbreedpicturesService } from './dogbreedpictures.service';

describe('DogbreedpicturesService', () => {
  let service: DogbreedpicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogbreedpicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

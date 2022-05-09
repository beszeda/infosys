import { TestBed } from '@angular/core/testing';

import { FeladatServiceService } from './feladat-service.service';

describe('MunkaServiceService', () => {
  let service: FeladatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeladatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

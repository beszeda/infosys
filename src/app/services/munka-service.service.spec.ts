import { TestBed } from '@angular/core/testing';

import { MunkaServiceService } from './munka-service.service';

describe('MunkaServiceService', () => {
  let service: MunkaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunkaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NetoService } from './neto.service';

describe('NetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetoService]
    });
  });

  it('should be created', inject([NetoService], (service: NetoService) => {
    expect(service).toBeTruthy();
  }));
});

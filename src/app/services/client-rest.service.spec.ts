import { TestBed, inject } from '@angular/core/testing';

import { ClientRESTService } from './client-rest.service';

describe('ClientRESTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRESTService]
    });
  });

  it('should be created', inject([ClientRESTService], (service: ClientRESTService) => {
    expect(service).toBeTruthy();
  }));
});

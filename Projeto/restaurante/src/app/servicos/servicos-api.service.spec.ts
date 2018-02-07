import { TestBed, inject } from '@angular/core/testing';

import { ServicosApiService } from './servicos-api.service';

describe('ServicosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosApiService]
    });
  });

  it('should be created', inject([ServicosApiService], (service: ServicosApiService) => {
    expect(service).toBeTruthy();
  }));
});

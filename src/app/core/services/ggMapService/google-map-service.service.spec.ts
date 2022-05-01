import { TestBed } from '@angular/core/testing';

import { GoogleMapServiceService } from './google-map-service.service';

describe('GoogleMapServiceService', () => {
  let service: GoogleMapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TabListService } from './tab-list.service';

describe('TabListService', () => {
  let service: TabListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

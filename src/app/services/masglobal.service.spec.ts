import { TestBed } from '@angular/core/testing';

import { MasGlobalService } from './masglobal.service';

describe('MasglobalService', () => {
  let service: MasGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

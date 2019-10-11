import { TestBed } from '@angular/core/testing';

import { PassIdService } from './pass-id.service';

describe('PassIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassIdService = TestBed.get(PassIdService);
    expect(service).toBeTruthy();
  });
});

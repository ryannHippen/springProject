import { TestBed } from '@angular/core/testing';

import { PassEmailService } from './pass-email.service';

describe('PassEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassEmailService = TestBed.get(PassEmailService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LunetteService } from './lunette.service'; // Updated the service name

describe('LunetteService', () => { // Updated the describe block
  let service: LunetteService; // Updated the service type

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunetteService); // Updated the service type
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

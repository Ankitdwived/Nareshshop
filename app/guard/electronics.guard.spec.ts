import { TestBed } from '@angular/core/testing';

import { ElectronicsGuard } from './electronics.guard';

describe('ElectronicsGuard', () => {
  let guard: ElectronicsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ElectronicsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

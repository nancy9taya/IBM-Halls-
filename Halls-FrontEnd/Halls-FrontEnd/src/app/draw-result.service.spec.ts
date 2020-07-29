import { TestBed } from '@angular/core/testing';

import { DrawResultService } from './draw-result.service';

describe('DrawResultService', () => {
  let service: DrawResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

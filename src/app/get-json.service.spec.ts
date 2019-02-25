import { TestBed } from '@angular/core/testing';

import { GetJsonService } from './get-json.service';

describe('GetJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetJsonService = TestBed.get(GetJsonService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DialogDataService } from './dialog-data.service';

describe('DialogDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogDataService = TestBed.get(DialogDataService);
    expect(service).toBeTruthy();
  });
});

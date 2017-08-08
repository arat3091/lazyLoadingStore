import { TestBed, inject } from '@angular/core/testing';

import { FolderService } from './folder.service';

describe('FolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderService]
    });
  });

  it('should be created', inject([FolderService], (service: FolderService) => {
    expect(service).toBeTruthy();
  }));
});

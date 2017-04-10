import { TestBed, inject } from '@angular/core/testing';

import { PostclipService } from './postclip.service';

describe('PostclipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostclipService]
    });
  });

  it('should ...', inject([PostclipService], (service: PostclipService) => {
    expect(service).toBeTruthy();
  }));
});

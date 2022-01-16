import { TestBed } from '@angular/core/testing';

import { ShareSkillService } from './share-skill.service';

describe('ShareSkillService', () => {
  let service: ShareSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

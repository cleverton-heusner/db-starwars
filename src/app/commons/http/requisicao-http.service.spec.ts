import { TestBed } from '@angular/core/testing';

import { RequisicaoHttpService } from './requisicao-http.service';

describe('RequisicaoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequisicaoHttpService = TestBed.get(RequisicaoHttpService);
    expect(service).toBeTruthy();
  });
});

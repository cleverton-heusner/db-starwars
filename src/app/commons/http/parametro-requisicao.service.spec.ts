import { TestBed } from '@angular/core/testing';

import { ParametroRequisicaoService } from './parametro-requisicao.service';

describe('ParametroRequisicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametroRequisicaoService = TestBed.get(ParametroRequisicaoService);
    expect(service).toBeTruthy();
  });
});

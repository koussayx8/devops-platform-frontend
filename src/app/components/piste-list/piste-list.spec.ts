import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisteList } from './piste-list';

describe('PisteList', () => {
  let component: PisteList;
  let fixture: ComponentFixture<PisteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PisteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

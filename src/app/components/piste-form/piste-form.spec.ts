import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisteForm } from './piste-form';

describe('PisteForm', () => {
  let component: PisteForm;
  let fixture: ComponentFixture<PisteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PisteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PisteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

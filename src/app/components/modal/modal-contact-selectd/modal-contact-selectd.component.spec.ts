import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactSelectdComponent } from './modal-contact-selectd.component';

describe('ModalContactSelectdComponent', () => {
  let component: ModalContactSelectdComponent;
  let fixture: ComponentFixture<ModalContactSelectdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContactSelectdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContactSelectdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

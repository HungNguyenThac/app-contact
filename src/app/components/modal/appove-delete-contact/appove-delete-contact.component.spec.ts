import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoveDeleteContactComponent } from './appove-delete-contact.component';

describe('AppoveDeleteContactComponent', () => {
  let component: AppoveDeleteContactComponent;
  let fixture: ComponentFixture<AppoveDeleteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoveDeleteContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoveDeleteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

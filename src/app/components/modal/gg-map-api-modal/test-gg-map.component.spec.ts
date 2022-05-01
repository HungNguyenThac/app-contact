import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGgMapComponent } from './test-gg-map.component';

describe('TestGgMapComponent', () => {
  let component: TestGgMapComponent;
  let fixture: ComponentFixture<TestGgMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGgMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGgMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

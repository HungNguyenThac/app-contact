import { ComponentFixture, TestBed } from "@angular/core/testing"

import { GgMapApiModalComponent } from "./gg-map-api.modal.component"

describe("GgMapApi.ModalComponent", () => {
  let component: GgMapApiModalComponent
  let fixture: ComponentFixture<GgMapApiModalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GgMapApiModalComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GgMapApiModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})

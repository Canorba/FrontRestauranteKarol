import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioPlatilloComponent } from './inventario-platillo.component';

describe('InventarioPlatilloComponent', () => {
  let component: InventarioPlatilloComponent;
  let fixture: ComponentFixture<InventarioPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioPlatilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

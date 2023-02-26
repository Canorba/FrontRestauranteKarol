import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloXFacturaComponent } from './platillo-xfactura.component';

describe('PlatilloXFacturaComponent', () => {
  let component: PlatilloXFacturaComponent;
  let fixture: ComponentFixture<PlatilloXFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatilloXFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatilloXFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

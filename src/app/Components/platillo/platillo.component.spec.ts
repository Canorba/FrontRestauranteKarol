import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloComponent } from './platillo.component';

describe('PlatilloComponent', () => {
  let component: PlatilloComponent;
  let fixture: ComponentFixture<PlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperElectronicComponent } from './shopper-electronic.component';

describe('ShopperElectronicComponent', () => {
  let component: ShopperElectronicComponent;
  let fixture: ComponentFixture<ShopperElectronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperElectronicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

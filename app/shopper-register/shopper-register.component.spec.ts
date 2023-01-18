import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperRegisterComponent } from './shopper-register.component';

describe('ShopperRegisterComponent', () => {
  let component: ShopperRegisterComponent;
  let fixture: ComponentFixture<ShopperRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

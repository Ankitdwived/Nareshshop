import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperLoginComponent } from './shopper-login.component';

describe('ShopperLoginComponent', () => {
  let component: ShopperLoginComponent;
  let fixture: ComponentFixture<ShopperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperHomeComponent } from './shopper-home.component';

describe('ShopperHomeComponent', () => {
  let component: ShopperHomeComponent;
  let fixture: ComponentFixture<ShopperHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

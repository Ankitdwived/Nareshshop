import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperJeweleryComponent } from './shopper-jewelery.component';

describe('ShopperJeweleryComponent', () => {
  let component: ShopperJeweleryComponent;
  let fixture: ComponentFixture<ShopperJeweleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperJeweleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperJeweleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

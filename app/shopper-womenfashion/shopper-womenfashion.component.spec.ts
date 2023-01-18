import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperWomenfashionComponent } from './shopper-womenfashion.component';

describe('ShopperWomenfashionComponent', () => {
  let component: ShopperWomenfashionComponent;
  let fixture: ComponentFixture<ShopperWomenfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperWomenfashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperWomenfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

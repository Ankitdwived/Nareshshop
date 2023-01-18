import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperMenfashionComponent } from './shopper-menfashion.component';

describe('ShopperMenfashionComponent', () => {
  let component: ShopperMenfashionComponent;
  let fixture: ComponentFixture<ShopperMenfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperMenfashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperMenfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

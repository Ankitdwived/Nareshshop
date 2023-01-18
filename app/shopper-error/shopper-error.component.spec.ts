import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperErrorComponent } from './shopper-error.component';

describe('ShopperErrorComponent', () => {
  let component: ShopperErrorComponent;
  let fixture: ComponentFixture<ShopperErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

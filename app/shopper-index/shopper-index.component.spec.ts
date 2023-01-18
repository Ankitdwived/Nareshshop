import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperIndexComponent } from './shopper-index.component';

describe('ShopperIndexComponent', () => {
  let component: ShopperIndexComponent;
  let fixture: ComponentFixture<ShopperIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

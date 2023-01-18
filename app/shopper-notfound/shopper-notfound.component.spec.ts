import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperNotfoundComponent } from './shopper-notfound.component';

describe('ShopperNotfoundComponent', () => {
  let component: ShopperNotfoundComponent;
  let fixture: ComponentFixture<ShopperNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperNotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperDetailComponent } from './shopper-detail.component';

describe('ShopperDetailComponent', () => {
  let component: ShopperDetailComponent;
  let fixture: ComponentFixture<ShopperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

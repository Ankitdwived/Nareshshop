import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperMoreDetailComponent } from './shopper-more-detail.component';

describe('ShopperMoreDetailComponent', () => {
  let component: ShopperMoreDetailComponent;
  let fixture: ComponentFixture<ShopperMoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopperMoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopperMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

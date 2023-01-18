import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe("cart title test",()=>{
    it("title must be amazone cart",()=>{
      expect(component.CartTitle("Amazone Shopping card")).toBe("Amazone Shopping Cart");
    })

  })

  //cart total test
  describe("cart total test",()=>{
it("total must be 10000",()=>{
  expect(component.Total(2,5000)).toBe(10000);
})
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoperFooterComponent } from './shoper-footer.component';

describe('ShoperFooterComponent', () => {
  let component: ShoperFooterComponent;
  let fixture: ComponentFixture<ShoperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoperFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBillComponent } from './show-bill.component';

describe('ShowBillComponent', () => {
  let component: ShowBillComponent;
  let fixture: ComponentFixture<ShowBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBillComponent]
    });
    fixture = TestBed.createComponent(ShowBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

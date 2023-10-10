import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlansComponent } from './show-plans.component';

describe('ShowPlansComponent', () => {
  let component: ShowPlansComponent;
  let fixture: ComponentFixture<ShowPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPlansComponent]
    });
    fixture = TestBed.createComponent(ShowPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

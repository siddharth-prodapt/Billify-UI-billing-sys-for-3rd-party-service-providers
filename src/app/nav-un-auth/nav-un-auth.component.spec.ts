import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUnAuthComponent } from './nav-un-auth.component';

describe('NavUnAuthComponent', () => {
  let component: NavUnAuthComponent;
  let fixture: ComponentFixture<NavUnAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavUnAuthComponent]
    });
    fixture = TestBed.createComponent(NavUnAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

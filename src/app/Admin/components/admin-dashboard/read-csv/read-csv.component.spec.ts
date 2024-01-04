import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCsvComponent } from './read-csv.component';

describe('ReadCsvComponent', () => {
  let component: ReadCsvComponent;
  let fixture: ComponentFixture<ReadCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCsvComponent]
    });
    fixture = TestBed.createComponent(ReadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

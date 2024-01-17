import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumFormatTestComponent } from './sum-format-test.component';

describe('SumFormatTestComponent', () => {
  let component: SumFormatTestComponent;
  let fixture: ComponentFixture<SumFormatTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumFormatTestComponent]
    });
    fixture = TestBed.createComponent(SumFormatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

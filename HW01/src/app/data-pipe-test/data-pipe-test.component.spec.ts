import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPipeTestComponent } from './data-pipe-test.component';

describe('DataPipeTestComponent', () => {
  let component: DataPipeTestComponent;
  let fixture: ComponentFixture<DataPipeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataPipeTestComponent]
    });
    fixture = TestBed.createComponent(DataPipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

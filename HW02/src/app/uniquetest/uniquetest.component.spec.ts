import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquetestComponent } from './uniquetest.component';

describe('UniquetestComponent', () => {
  let component: UniquetestComponent;
  let fixture: ComponentFixture<UniquetestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniquetestComponent]
    });
    fixture = TestBed.createComponent(UniquetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

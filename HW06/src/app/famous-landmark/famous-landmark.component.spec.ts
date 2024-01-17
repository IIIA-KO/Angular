import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousLandmarkComponent } from './famous-landmark.component';

describe('FamousLandmarkComponent', () => {
  let component: FamousLandmarkComponent;
  let fixture: ComponentFixture<FamousLandmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamousLandmarkComponent]
    });
    fixture = TestBed.createComponent(FamousLandmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLandmarksComponent } from './other-landmarks.component';

describe('OtherLandmarksComponent', () => {
  let component: OtherLandmarksComponent;
  let fixture: ComponentFixture<OtherLandmarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherLandmarksComponent]
    });
    fixture = TestBed.createComponent(OtherLandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

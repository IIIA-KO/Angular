import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingBlockComponent } from './changing-block.component';

describe('ChangingBlockComponent', () => {
  let component: ChangingBlockComponent;
  let fixture: ComponentFixture<ChangingBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangingBlockComponent]
    });
    fixture = TestBed.createComponent(ChangingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

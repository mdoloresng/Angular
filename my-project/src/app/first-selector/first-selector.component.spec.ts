import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSelectorComponent } from './first-selector.component';

describe('FirstSelectorComponent', () => {
  let component: FirstSelectorComponent;
  let fixture: ComponentFixture<FirstSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstSelectorComponent]
    });
    fixture = TestBed.createComponent(FirstSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

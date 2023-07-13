import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSelectorComponent } from './second-selector.component';

describe('SecondSelectorComponent', () => {
  let component: SecondSelectorComponent;
  let fixture: ComponentFixture<SecondSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondSelectorComponent]
    });
    fixture = TestBed.createComponent(SecondSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

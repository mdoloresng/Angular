import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowpdownListComponent } from './drowpdown-list.component';

describe('DrowpdownListComponent', () => {
  let component: DrowpdownListComponent;
  let fixture: ComponentFixture<DrowpdownListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrowpdownListComponent]
    });
    fixture = TestBed.createComponent(DrowpdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassmatesComponent } from './view-classmates.component';

describe('ViewClassmatesComponent', () => {
  let component: ViewClassmatesComponent;
  let fixture: ComponentFixture<ViewClassmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClassmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClassmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteKeepComponent } from './view-note-keep.component';

describe('ViewNoteKeepComponent', () => {
  let component: ViewNoteKeepComponent;
  let fixture: ComponentFixture<ViewNoteKeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNoteKeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNoteKeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

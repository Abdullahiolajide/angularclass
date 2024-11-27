import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteContentComponent } from './view-note-content.component';

describe('ViewNoteContentComponent', () => {
  let component: ViewNoteContentComponent;
  let fixture: ComponentFixture<ViewNoteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNoteContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNoteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

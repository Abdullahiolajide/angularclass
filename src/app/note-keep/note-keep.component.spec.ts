import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteKeepComponent } from './note-keep.component';

describe('NoteKeepComponent', () => {
  let component: NoteKeepComponent;
  let fixture: ComponentFixture<NoteKeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteKeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteKeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

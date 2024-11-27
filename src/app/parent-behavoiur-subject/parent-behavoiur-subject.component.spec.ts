import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBehavoiurSubjectComponent } from './parent-behavoiur-subject.component';

describe('ParentBehavoiurSubjectComponent', () => {
  let component: ParentBehavoiurSubjectComponent;
  let fixture: ComponentFixture<ParentBehavoiurSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBehavoiurSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBehavoiurSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

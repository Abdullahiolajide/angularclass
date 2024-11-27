import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBehaviourSubComponent } from './child-behaviour-sub.component';

describe('ChildBehaviourSubComponent', () => {
  let component: ChildBehaviourSubComponent;
  let fixture: ComponentFixture<ChildBehaviourSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBehaviourSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBehaviourSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

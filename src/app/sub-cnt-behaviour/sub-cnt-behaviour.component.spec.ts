import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCntBehaviourComponent } from './sub-cnt-behaviour.component';

describe('SubCntBehaviourComponent', () => {
  let component: SubCntBehaviourComponent;
  let fixture: ComponentFixture<SubCntBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCntBehaviourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCntBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

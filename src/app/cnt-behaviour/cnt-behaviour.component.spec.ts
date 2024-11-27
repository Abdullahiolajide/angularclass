import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntBehaviourComponent } from './cnt-behaviour.component';

describe('CntBehaviourComponent', () => {
  let component: CntBehaviourComponent;
  let fixture: ComponentFixture<CntBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CntBehaviourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CntBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

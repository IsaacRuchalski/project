import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraductionComponent } from './traduction.component';

describe('TraductionComponent', () => {
  let component: TraductionComponent;
  let fixture: ComponentFixture<TraductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

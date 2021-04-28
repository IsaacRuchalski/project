import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNotFoundComponent } from './log-not-found.component';

describe('LogNotFoundComponent', () => {
  let component: LogNotFoundComponent;
  let fixture: ComponentFixture<LogNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

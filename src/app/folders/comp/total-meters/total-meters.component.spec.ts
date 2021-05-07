import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMetersComponent } from './total-meters.component';

describe('TotalMetersComponent', () => {
  let component: TotalMetersComponent;
  let fixture: ComponentFixture<TotalMetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMetersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

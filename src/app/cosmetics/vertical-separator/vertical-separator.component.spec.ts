import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSeparatorComponent } from './vertical-separator.component';

describe('VerticalSeparatorComponent', () => {
  let component: VerticalSeparatorComponent;
  let fixture: ComponentFixture<VerticalSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

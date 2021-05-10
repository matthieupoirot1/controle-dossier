import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoldersComponent } from './display-folders.component';

describe('DisplayFoldersComponent', () => {
  let component: DisplayFoldersComponent;
  let fixture: ComponentFixture<DisplayFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractViewComponent } from './abstract-view.component';

describe('AbstractViewComponent', () => {
  let component: AbstractViewComponent;
  let fixture: ComponentFixture<AbstractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

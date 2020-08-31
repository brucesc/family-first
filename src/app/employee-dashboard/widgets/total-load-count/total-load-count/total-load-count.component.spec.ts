import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLoadCountComponent } from './total-load-count.component';

describe('TotalLoadCountComponent', () => {
  let component: TotalLoadCountComponent;
  let fixture: ComponentFixture<TotalLoadCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalLoadCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLoadCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

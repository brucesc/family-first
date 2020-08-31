import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCountByQueueComponent } from './load-count-by-queue.component';

describe('LoadCountByQueueComponent', () => {
  let component: LoadCountByQueueComponent;
  let fixture: ComponentFixture<LoadCountByQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadCountByQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCountByQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

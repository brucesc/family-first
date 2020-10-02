import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsExpansionComponent } from './insights-expansion.component';

describe('InsightsExpansionComponent', () => {
  let component: InsightsExpansionComponent;
  let fixture: ComponentFixture<InsightsExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

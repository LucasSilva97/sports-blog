import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaOneNewsComponent } from './formula-one-news.component';

describe('FormulaOneNewsComponent', () => {
  let component: FormulaOneNewsComponent;
  let fixture: ComponentFixture<FormulaOneNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaOneNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaOneNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

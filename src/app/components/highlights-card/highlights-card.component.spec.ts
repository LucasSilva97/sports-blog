import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsCardComponent } from './highlights-card.component';

describe('HighlightsCardComponent', () => {
  let component: HighlightsCardComponent;
  let fixture: ComponentFixture<HighlightsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

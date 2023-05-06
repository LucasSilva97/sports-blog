import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfcNewsComponent } from './ufc-news.component';

describe('UfcNewsComponent', () => {
  let component: UfcNewsComponent;
  let fixture: ComponentFixture<UfcNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfcNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfcNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

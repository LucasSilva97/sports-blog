import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballNewsComponent } from './basketball-news.component';

describe('BasketballNewsComponent', () => {
  let component: BasketballNewsComponent;
  let fixture: ComponentFixture<BasketballNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

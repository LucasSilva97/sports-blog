import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballNewsComponent } from './football-news.component';

describe('FootballNewsComponent', () => {
  let component: FootballNewsComponent;
  let fixture: ComponentFixture<FootballNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

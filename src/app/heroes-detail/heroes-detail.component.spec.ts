import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailComponent } from './heroes-detail.component';

describe('HeroesDetailComponent', () => {
  let component: HeroesDetailComponent;
  let fixture: ComponentFixture<HeroesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesDetailComponent]
    });
    fixture = TestBed.createComponent(HeroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

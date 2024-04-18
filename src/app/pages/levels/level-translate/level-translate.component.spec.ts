import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTranslateComponent } from './level-translate.component';

describe('LevelTranslateComponent', () => {
  let component: LevelTranslateComponent;
  let fixture: ComponentFixture<LevelTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTranslateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

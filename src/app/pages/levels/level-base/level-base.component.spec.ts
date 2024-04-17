import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBaseComponent } from './level-base.component';

describe('LevelBaseComponent', () => {
  let component: LevelBaseComponent;
  let fixture: ComponentFixture<LevelBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

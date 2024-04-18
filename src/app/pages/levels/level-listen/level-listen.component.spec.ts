import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelListenComponent } from './level-listen.component';

describe('LevelListenComponent', () => {
  let component: LevelListenComponent;
  let fixture: ComponentFixture<LevelListenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelListenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

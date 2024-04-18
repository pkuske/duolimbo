import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelConnectComponent } from './level-connect.component';

describe('LevelConnectComponent', () => {
  let component: LevelConnectComponent;
  let fixture: ComponentFixture<LevelConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

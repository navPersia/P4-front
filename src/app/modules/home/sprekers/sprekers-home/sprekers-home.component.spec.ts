import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SprekersHomeComponent} from './sprekers-home.component';

describe('SprekersHomeComponent', () => {
  let component: SprekersHomeComponent;
  let fixture: ComponentFixture<SprekersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprekersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprekersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

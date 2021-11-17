import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SprekersComponent} from './sprekers.component';

describe('SprekersComponent', () => {
  let component: SprekersComponent;
  let fixture: ComponentFixture<SprekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprekersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

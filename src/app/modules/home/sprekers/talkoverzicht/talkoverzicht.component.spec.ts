import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TalkoverzichtComponent} from './talkoverzicht.component';

describe('TalkoverzichtComponent', () => {
  let component: TalkoverzichtComponent;
  let fixture: ComponentFixture<TalkoverzichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkoverzichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

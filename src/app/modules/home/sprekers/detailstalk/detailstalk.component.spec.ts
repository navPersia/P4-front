import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailstalkComponent} from './detailstalk.component';

describe('DetailstalkComponent', () => {
  let component: DetailstalkComponent;
  let fixture: ComponentFixture<DetailstalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

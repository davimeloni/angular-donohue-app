import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetoDashboardComponent } from './neto-dashboard.component';

describe('NetoDashboardComponent', () => {
  let component: NetoDashboardComponent;
  let fixture: ComponentFixture<NetoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

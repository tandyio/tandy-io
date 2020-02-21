import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavsComponent } from './primary-navs.component';

describe('PrimaryNavsComponent', () => {
  let component: PrimaryNavsComponent;
  let fixture: ComponentFixture<PrimaryNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

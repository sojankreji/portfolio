import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapengineComponent } from './wrapengine.component';

describe('WrapengineComponent', () => {
  let component: WrapengineComponent;
  let fixture: ComponentFixture<WrapengineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapengineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

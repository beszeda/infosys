import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunkaComponent } from './munka.component';

describe('MunkaComponent', () => {
  let component: MunkaComponent;
  let fixture: ComponentFixture<MunkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunkasComponent } from './munkas.component';

describe('MunkasComponent', () => {
  let component: MunkasComponent;
  let fixture: ComponentFixture<MunkasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunkasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunkasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

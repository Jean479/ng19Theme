import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleModeComponent } from './toogle-mode.component';

describe('ToogleModeComponent', () => {
  let component: ToogleModeComponent;
  let fixture: ComponentFixture<ToogleModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToogleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

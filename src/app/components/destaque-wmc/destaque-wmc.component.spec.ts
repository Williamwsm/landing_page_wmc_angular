import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueWmcComponent } from './destaque-wmc.component';

describe('DestaqueWmcComponent', () => {
  let component: DestaqueWmcComponent;
  let fixture: ComponentFixture<DestaqueWmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestaqueWmcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestaqueWmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

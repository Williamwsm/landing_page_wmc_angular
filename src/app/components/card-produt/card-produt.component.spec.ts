import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutComponent } from './card-produt.component';

describe('CardProdutComponent', () => {
  let component: CardProdutComponent;
  let fixture: ComponentFixture<CardProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

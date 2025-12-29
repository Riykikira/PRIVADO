import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoComponet } from './corpo.componet';

describe('CorpoComponet', () => {
  let component: CorpoComponet;
  let fixture: ComponentFixture<CorpoComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogbreedlistComponent } from './dogbreedlist.component';

describe('DogbreedlistComponent', () => {
  let component: DogbreedlistComponent;
  let fixture: ComponentFixture<DogbreedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogbreedlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogbreedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

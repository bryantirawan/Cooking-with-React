import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsofdogbreedComponent } from './picsofdogbreed.component';

describe('PicsofdogbreedComponent', () => {
  let component: PicsofdogbreedComponent;
  let fixture: ComponentFixture<PicsofdogbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsofdogbreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsofdogbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

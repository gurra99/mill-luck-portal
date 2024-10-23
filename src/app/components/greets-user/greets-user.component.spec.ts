import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetsUserComponent } from './greets-user.component';

describe('GreetsUserComponent', () => {
  let component: GreetsUserComponent;
  let fixture: ComponentFixture<GreetsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

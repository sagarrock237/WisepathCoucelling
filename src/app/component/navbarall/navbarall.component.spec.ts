import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarallComponent } from './navbarall.component';

describe('NavbarallComponent', () => {
  let component: NavbarallComponent;
  let fixture: ComponentFixture<NavbarallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarallComponent]
    });
    fixture = TestBed.createComponent(NavbarallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

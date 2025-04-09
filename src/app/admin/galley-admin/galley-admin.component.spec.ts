import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyAdminComponent } from './galley-admin.component';

describe('GalleyAdminComponent', () => {
  let component: GalleyAdminComponent;
  let fixture: ComponentFixture<GalleyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleyAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

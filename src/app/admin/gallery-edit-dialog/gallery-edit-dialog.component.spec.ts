import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEditDialogComponent } from './gallery-edit-dialog.component';

describe('GalleryEditDialogComponent', () => {
  let component: GalleryEditDialogComponent;
  let fixture: ComponentFixture<GalleryEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

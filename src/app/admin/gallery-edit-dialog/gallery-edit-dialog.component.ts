import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GalleryItem } from '../../pages/gallery/gallery.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GalleryService } from '../../services/gallery.service';
import { title } from 'process';

@Component({
  selector: 'app-gallery-edit-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './gallery-edit-dialog.component.html',
  styleUrls: ['./gallery-edit-dialog.component.scss'],
})
export class GalleryEditDialogComponent {
  form: FormGroup;
  categories: any[] = ['Cultural', 'Events', 'Community'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GalleryEditDialogComponent>,
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      //imageUrl: ['', [Validators.required]],
      date: [null],
      description: [''],
    });
  }

  selectedImageFile: any | null = null;
  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImageFile = input.files[0];
    }
  }
  onSubmit(): void {
    if (this.form.invalid) return;
    const formValue = this.form.value;

    const payload = {
      title: formValue.title,
      category: formValue.category,
      //imageUrl: formValue.imageUrl,
      date: formValue.date,
      description: formValue.description,
    };
    if (this.form.valid) {
      this.galleryService.createGallery(payload, this.selectedImageFile).subscribe({
        next: (response) => {
          console.log('gallery created:', response);
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error creating Image gallery', error);
        },
      });
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

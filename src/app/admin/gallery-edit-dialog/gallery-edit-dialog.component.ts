import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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


@Component({
  selector: 'app-gallery-edit-dialog',
  imports:[  CommonModule,
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
    MatNativeDateModule,],
  templateUrl: './gallery-edit-dialog.component.html',
  styleUrls: ['./gallery-edit-dialog.component.scss']
})
export class GalleryEditDialogComponent {
  form: FormGroup;
  mode: 'add' | 'edit';
  categories: any[]= ['Cultural','Events','Community'];


  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Independence Day Celebration',
      category: 'cultural',
      imageUrl:
        'https://media.vaticannews.va/media/content/dam-archive/vaticannews/agenzie/images/afp/2021/07/07/06/1625630495042.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg',
      date: new Date(2023, 6, 9),
      description: 'Annual celebration of South Sudan independence',
    },
    {
      id: 2,
      title: 'Youth Football Tournament',
      category: 'community',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8L5PePIN45vApkvS2meIvNJLbJzUNCMOLOQ&s',
      date: new Date(2023, 8, 15),
    },
    {
      id: 3,
      title: 'Traditional Dance Workshop',
      category: 'cultural',
      imageUrl: '../../../assets/images/Cultural2.jpg',
      date: new Date(2023, 5, 20),
    },
    {
      id: 4,
      title: 'Community Picnic',
      category: 'community',
      imageUrl: '../../../assets/images/culture1.jpg',
      date: new Date(2023, 7, 12),
    },
    {
      id: 5,
      title: 'Language Class Graduation',
      category: 'events',
      imageUrl: '../../../assets/images/frends.jpeg',
      date: new Date(2023, 9, 5),
    },
    {
      id: 6,
      title: 'Cultural Fashion Show',
      category: 'cultural',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh38lpInylGCaVHP1vgZSyPlS6gmPQ2eiKlA&s',
      date: new Date(2023, 10, 18),
    },
  ];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GalleryEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mode = data.mode;

    this.form = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      date: [null],
      description: ['']
    });

    if (this.mode === 'edit' && data.item) {
      this.form.patchValue(data.item);
    }
  }

  onSave(): void {
    if (this.form.valid) {
      const result: GalleryItem = {
        ...(this.mode === 'edit' ? this.data.item : {}),
        ...this.form.value
      };
      this.dialogRef.close(result);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
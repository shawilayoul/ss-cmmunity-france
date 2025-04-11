import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../../pages/gallery/gallery.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GalleryEditDialogComponent } from '../gallery-edit-dialog/gallery-edit-dialog.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GalleryService } from '../../services/gallery.service';
//import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-gallery-admin',
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
  ],
  templateUrl: './gallery-admin.component.html',
  styleUrl: './gallery-admin.component.scss',
})
export class GalleryAdminComponent implements OnInit {
  galleryItems: GalleryItem[] = [];
  filteredItems: GalleryItem[] = [];
  selectedCategory: string = 'all';
  searchQuery: string = '';
  isLoading = false;

  constructor(private dialog: MatDialog,private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.loadGalleryItems();
  }


  loadGalleryItems(): void {
    this.galleryService.getGallery().subscribe((gallery)=>{
      this.isLoading = true;

      this.galleryItems = gallery;
      this.filteredItems = [...this.galleryItems];
      this.isLoading = false;
    })
  
  }

  filterItems(): void {
    this.filteredItems = this.galleryItems.filter((item) => {
      const matchesCategory =
        this.selectedCategory === 'all' ||
        item.category === this.selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (item.description &&
          item.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterItems();
  }

  onSearchChange(query: string): void {
    this.searchQuery = query;
    this.filterItems();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(GalleryEditDialogComponent, {
      width: '600px',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openEditDialog(item: GalleryItem): void {
    const dialogRef = this.dialog.open(GalleryEditDialogComponent, {
      width: '600px',
      data: { mode: 'edit', item },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteItem(item: GalleryItem): void {
    /*const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete "${item.title}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });*/
  }
}

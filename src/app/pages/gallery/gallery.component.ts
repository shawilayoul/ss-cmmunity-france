import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './gallery.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { GalleryService } from '../../services/gallery.service';
@Component({
  selector: 'app-gallery',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    LightboxComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  activeCategory: string = 'all';
  searchQuery: string = '';
  selectedItem: GalleryItem | null = null;
  allItems: GalleryItem[] = [];
  galleryItems: GalleryItem[] =[];
  currentIndex: number = 0;

  constructor(private galleryService: GalleryService) {}
  ngOnInit(): void {
    this.loadGallery()
  }

  loadGallery() {
    this.galleryService.getGallery().subscribe((gallery) => {
      this.galleryItems = gallery;
    });
  }

 /* galleryItems: GalleryItem[] = [
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
  ];*/

  get filteredItems() {
    return this.galleryItems.filter((item) => {
      const matchesCategory =
        this.activeCategory === 'all' || item.category === this.activeCategory;
      const matchesSearch =
        item.title
          .toLocaleLowerCase()
          .includes(this.searchQuery.toLocaleLowerCase()) ||
        (item.description &&
          item.description
            .toLocaleLowerCase()
            .includes(this.searchQuery.toLocaleLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }

  openLightbox(item: GalleryItem) {
    this.selectedItem = item;
    this.currentIndex = this.allItems.findIndex((i) => i.id === item.id);
  }

  closeLightbox() {
    this.selectedItem = null;
  }

  onLightboxNav(direction: 'prev' | 'next') {
    if (!this.selectedItem) return;

    // Find current index
    const currentIndex = this.galleryItems.findIndex(
      (item) => item.id === this.selectedItem?.id
    );

    // Calculate new index
    let newIndex;
    if (direction === 'prev') {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : this.galleryItems.length - 1;
    } else {
      newIndex =
        currentIndex < this.galleryItems.length - 1 ? currentIndex + 1 : 0;
    }

    this.selectedItem = this.galleryItems[newIndex];
  }
}
export type { GalleryItem };

import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GalleryItem } from '../gallery/gallery.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  imports:[CommonModule,MatIconModule],
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  @Input() item: GalleryItem | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() navClick = new EventEmitter<'prev'|'next'>(); 

  // Handles button clicks
  onNavigate(direction: 'prev' | 'next') {
    this.navClick.emit(direction);
  }

  // Handles keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.item) return;
    
    switch(event.key) {
      case 'Escape':
        this.close.emit();
        break;
      case 'ArrowLeft':
        this.navClick.emit('prev');
        break;
      case 'ArrowRight':
        this.navClick.emit('next');
        break;
    }
  }
}
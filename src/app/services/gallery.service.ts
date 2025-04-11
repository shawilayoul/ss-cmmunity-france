import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from '../pages/gallery/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

    private apiUrl = 'http://localhost:8080/api/gallery';
  
    constructor(private http: HttpClient) {}
  
    getGallery(): Observable<GalleryItem[]> {
      return this.http.get<GalleryItem[]>(this.apiUrl);
    }
    createGallery(gallery: Partial<GalleryItem>): Observable<GalleryItem> {
      return this.http.post<GalleryItem>(this.apiUrl, gallery);
    }
}

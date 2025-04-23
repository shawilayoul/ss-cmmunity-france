import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryItem } from '../pages/gallery/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

    private apiUrl = 'https://ss-cmmunity-fr.onrender.com/api/gallery';
  
    constructor(private http: HttpClient) {}
  
    getGallery(): Observable<GalleryItem[]> {
      return this.http.get<GalleryItem[]>(this.apiUrl);
    }
  
    createGallery(gallery: GalleryItem, imageFile: File): Observable<GalleryItem> {

      const formDate = new FormData();
      formDate.append('title', gallery.title);
      formDate.append('category', gallery.category);
      formDate.append('date', gallery.date?.toString());
      formDate.append('description', gallery?.description);
      if(imageFile){
        formDate.append('imageFile',imageFile)
      }
      return this.http.post<GalleryItem>(this.apiUrl, formDate);
    }

    deleteGallery(id: string): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`)
    }
}

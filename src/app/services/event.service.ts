import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../pages/events/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }


  createEvent(eventData: Event, imageFile: File): Observable<Event> {
    const formData = new FormData();
  
    formData.append('title', eventData.title);
    formData.append('description', eventData.description);
    formData.append('date', eventData.date.toString()); // ou toISOString()
    formData.append('endDate', eventData.endDate.toString());
    formData.append('category', eventData.category);
    formData.append('price', eventData.price.toString());
    formData.append('organizer', eventData.organizer);
    formData.append('contactEmail', eventData.contactEmail);
    formData.append('registrationLink', eventData.registrationLink);
    formData.append('attendees', eventData.attendees.toString());
    formData.append('isFeatured', String(eventData.isFeatured));
  
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }
  
    return this.http.post<Event>(this.apiUrl, formData);
  }
  

  updateEvent(id: string, event:Event): Observable<Event>{
    return this.http.put<Event>(`${this.apiUrl}/${id}`,event)
  }

  deleteEvent(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getFeaturedEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}?isFeatured=true`);
  }
}

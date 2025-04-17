import { Injectable } from '@angular/core';
import { Member } from '../pages/members/members.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/api/members';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }
  createMember(member: Partial<Member>): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }
  deletMember(id: string): Observable<void>{
return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/event.service';
import { Event } from '../../pages/events/events.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Member } from '../../pages/members/members.model';
import { GalleryItem } from '../../pages/gallery/gallery.model';
import { MatDialog } from '@angular/material/dialog';
import { RequestMembershipDialogComponent } from '../../pages/request-membership-dialog/request-membership-dialog.component';
import { EventFormComponent } from '../events/event-form/event-form.component';
import { MemberService } from '../../services/member.service';
import { GalleryEditDialogComponent } from '../gallery-edit-dialog/gallery-edit-dialog.component';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DashboardComponent implements OnInit {
  totalEvents = 0;
  totalMembers = 0;
  totalGalleryItems = 0;
  upcomingEvents = 0;
  featuredEvents = 0;
  recentEvents: Event[] = [];
  recentMembers: Member[] = [];
  recentGalleryItems: GalleryItem[] = [];

  constructor(
    private eventsService: EventsService,
    private memberService: MemberService,
    private galleryService: GalleryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadRecentesMembers();
    this.loadGalleryItems();
  }

  loadDashboardData(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.totalEvents = events.length;
      
      this.upcomingEvents = events.filter(
        (e) => new Date(e.date) > new Date()
      ).length;

      this.featuredEvents = events.filter((e) => e.isFeatured).length;

      this.recentEvents = events
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
    });
  }

  loadRecentesMembers(): void{
    this.memberService.getMembers().subscribe(member=>{
      this.totalMembers = member.length;
      this.recentMembers = member.sort((a,b)=> new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()).slice(0,3)
    })
  }

  loadGalleryItems(): void {
    this.galleryService.getGallery().subscribe((gallery)=>{
       this.totalGalleryItems = gallery.length;
       this.recentGalleryItems = gallery.slice(0, 4);
    })
  
  }
  viewDetails(eventId: string): void {
    // Implement navigation to details or use dialog
  }

  openMembershipRequest() {
    const dialogRef = this.dialog.open(RequestMembershipDialogComponent, {
      width: '600px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the submitted form data
        console.log('Membership request submitted:', result);
        // You would typically send this to your backend here
      }
    });
  }

  openAddEventRequest() {
    const dialogRef = this.dialog.open(EventFormComponent, {
      width: '600px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the submitted form data
        console.log('Membership request submitted:', result);
        // You would typically send this to your backend here
      }
    });
  }

  openAddGallerFormDialog(): void {
      const dialogRef = this.dialog.open(GalleryEditDialogComponent, {
        width: '600px',
        data: { mode: 'add' },
      });
  
      dialogRef.afterClosed().subscribe((result) => {});
    }
  
  viewEventDetails(eventId: any): void {}
  viewMemberDetails(memberId: any): void {}
  deleteGalleryItem(itemId: any) {}
}

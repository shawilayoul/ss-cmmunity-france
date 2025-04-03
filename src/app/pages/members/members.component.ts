import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { Member } from './members.model';
import { RequestMembershipDialogComponent } from '../request-membership-dialog/request-membership-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';  
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipListbox,
    MatChip,
    MatButtonToggleModule,
    MatCardModule,
 MatDividerModule 

    
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {


  searchTerm: string = '';
  activeFilter: string = 'all';
  members: Member[] = [];
  filteredMembers: Member[] = [];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,

  ) {    
  }


  ngOnInit() {
    this.members = [
      {
        id: '1',
        name: 'Achol Deng',
        role: 'organizer',
        region: 'Upper Nile',
        profilePhoto: '../../../assets/images/ochol.jpg',
        skills: ['Event Planning', 'Translation'],
        joinedDate: new Date(2020, 2, 15),
        contact: {
          email: 'aocholayoul9@gmail.com',
          phone: '0782338751',
          whatsapp: '20336669685',
        },
        bio: 'Community organizer since 2020, helps with youth programs',
        isActive: true,
      },
      {
        id: '2',
        name: 'Michael Lado',
        role: 'volunteer',
        region: 'Equatoria',
        profilePhoto: 'https://images.pexels.com/photos/4913817/pexels-photo-4913817.jpeg?auto=compress&cs=tinysrgb&w=600',
        joinedDate: new Date(2021, 5, 10),
        contact: {
          email: 'aocholayoul9@gmail.com',
          phone: '0782338751',
          whatsapp: '20336669685',
        },
        skills: ['Web Development', 'Tutoring'],
        isActive: true,
      }
    ];
    
    this.filteredMembers = [...this.members]; // Initialize filtered members correctly
  }
  filterByRole(role: string): void {
    this.activeFilter = role;
    this.applyFilters();
  }

  searchMembers(): void {
    this.applyFilters();
  }

  


  private applyFilters(): void {
    this.filteredMembers = this.members.filter(member => {
      const matchesRole = this.activeFilter === 'all' || member.role === this.activeFilter;
      const matchesSearch = this.searchTerm === '' || 
        member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (member.skills && member.skills.some(skill => 
          skill.toLowerCase().includes(this.searchTerm.toLowerCase()))) ||
        member.region.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesRole && matchesSearch;
    });
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.activeFilter = 'all';
    this.filteredMembers = [...this.members];
  }

  openWhatsApp(phone: string | undefined): void {
    if (!phone) {
      console.error("WhatsApp number is missing");
      return;
    }
    window.open(`https://wa.me/${phone}`, '_blank');
  }
  
  sendEmail(email: string | undefined): void {
    if (!email) {
      console.error("Email is missing");
      return;
    }
    window.location.href = `mailto:${email}`;
  }
  

  openMembershipRequest() {
    const dialogRef = this.dialog.open(RequestMembershipDialogComponent, {
      width: '600px',
      maxWidth: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the submitted form data
        console.log('Membership request submitted:', result);
        // You would typically send this to your backend here
      }
    });
  }
}

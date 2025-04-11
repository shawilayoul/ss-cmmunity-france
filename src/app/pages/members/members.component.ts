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
    MatDividerModule,
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  fofficeMembers: Member[] = [
    {
      id: '1',
      name: 'John Deng',
      email: 'john.deng@example.com',
      phone: '+33612345678',
      role: 'organizer',
      region: 'Île-de-France',
      profilePhoto: 'https://cdn.pixabay.com/photo/2016/11/18/17/08/fashion-1835871_1280.jpg',
      skills: ['Leadership', 'Event Planning'],
      joinedDate: new Date('2022-04-10'),
      bio: 'Community leader passionate about social impact and development.',
      isActive: true,
    },
    {
      id: '2',
      name: 'Mary Akot',
      email: 'mary.akot@example.com',
      phone: '+33687654321',
      role: 'volunteer',
      region: 'Provence-Alpes-Côte d\'Azur',
      profilePhoto:"https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png",
      joinedDate: new Date('2023-06-15'),
      skills: ['Fundraising', 'Communication'],
      isActive: true,
    },
    {
      id: '3',
      name: 'Peter Lual',
      email: 'john.deng@example.com',
      phone: '+33612345678',
      region: 'Auvergne-Rhône-Alpes',
      profilePhoto:"https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png",
      role: 'member',
      joinedDate: new Date('2024-01-12'),
      bio: 'Interested in supporting the community through educational projects.',
    },
    {
      id: '4',
      name: 'Grace Abuk',
      email: 'grace.abuk@example.com',
      phone: '+33612345678',
      region: 'Occitanie',
      profilePhoto:"https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png",
      joinedDate: new Date('2021-09-30'),
      skills: ['Translation', 'Mentoring'],
      isActive: false,
    },
    {
      id: '5',
      name: 'Daniel Chol',
      region: 'Normandie',
      profilePhoto:"https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png",
      role: 'volunteer',
      joinedDate: new Date('2022-11-05'),
      email: 'daniel.chol@example.com',
      phone: '+33712345678',
      bio: 'Aspiring youth mentor and sports coordinator.',
      isActive: true,
    },
    {
      id: '6',
      name: 'Elizabeth Nyadak',
      region: 'Bretagne',
      email: 'john.deng@example.com',
      phone: '+33612345678',
      role: 'member',
      joinedDate: new Date('2023-03-20'),
      profilePhoto:"https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png",
      skills: ['Photography'],
      isActive: true,
    }
  ];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    /*this.memberService.getMembers().subscribe((members) => {
      this.members = members;
    });*/
  this.members= this.fofficeMembers;
  }


  openWhatsApp(phone: string | undefined): void {
    if (!phone) {
      console.error('WhatsApp number is missing');
      return;
    }
    window.open(`https://wa.me/${phone}`, '_blank');
  }

  sendEmail(email: string | undefined): void {
    if (!email) {
      console.error('Email is missing');
      return;
    }
    window.location.href = `mailto:${email}`;
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


  //offcer member 


  
}

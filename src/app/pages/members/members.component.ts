import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipListbox, MatChip } from '@angular/material/chips';

export interface Member {
  id: string;
  name: string;
  role?: 'member' | 'volunteer' | 'organizer' | 'admin';
  region: string; // South Sudanese region of origin
  profilePhoto?: string;
  skills?: string[];
  joinedDate: Date;
  contact?: {
whatsapp: any;
    email?: string;
    phone?: string;
    socialMedia?: {
      facebook?: string;
      whatsapp?: string;
    };
  };
  bio?: string;
  isActive?: boolean;
}

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
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
sendEmail(arg0: string) {
throw new Error('Method not implemented.');
}
  members: Member[] = [
    {
      id: '1',
      name: 'Achol Deng',
      role: 'organizer',
      region: 'Upper Nile',
      profilePhoto: 'assets/profiles/achol.jpg',
      skills: ['Event Planning', 'Translation'],
      joinedDate: new Date(2020, 2, 15),
      contact: {
        socialMedia: {
          whatsapp: '+33 6 12 34 56 78',
        },
        whatsapp: undefined
      },
      bio: 'Community organizer since 2020, helps with youth programs',
      isActive: true,
    },
    {
      id: '2',
      name: 'Michael Lado',
      role: 'volunteer',
      region: 'Equatoria',
      joinedDate: new Date(2021, 5, 10),
      skills: ['Web Development', 'Tutoring'],
      isActive: true,
    },
  ];

  filteredMembers = this.members;
  searchTerm = '';

  filterByRole(role: string): void {
    this.filteredMembers =
      role === 'all'
        ? this.members
        : this.members.filter((m) => m.role === role);
  }

  searchMembers(): void {
    this.filteredMembers = this.members.filter(
      (member) =>
        member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        member.region.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        member.skills?.some((skill) =>
          skill.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
    );
  }
}

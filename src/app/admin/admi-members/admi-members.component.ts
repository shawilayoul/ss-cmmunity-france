import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { Member } from '../../pages/members/members.model';
import { RequestMembershipDialogComponent } from '../../pages/request-membership-dialog/request-membership-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MemberService } from '../../services/member.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admi-members',
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
  templateUrl: './admi-members.component.html',
  styleUrl: './admi-members.component.scss',
})
export class AdmiMembersComponent implements OnInit {
  searchTerm: string = '';
  activeFilter: string = 'all';
  members: Member[] = [];
  filteredMembers: Member[] = [];

  constructor(
    private dialog: MatDialog,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.loadMembers();
    this.applyFilters()
  }

  loadMembers(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.members = members;
    });
  }
  filterByRole(role: string): void {
    this.activeFilter = role;
    this.applyFilters();
  }

  searchMembers(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredMembers = this.members.filter((member) => {
      const matchesRole =
        this.activeFilter === 'all' || member.role === this.activeFilter;
      const matchesSearch =
        this.searchTerm === '' ||
        member.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (member.skills &&
          member.skills.some((skill) =>
            skill.toLowerCase().includes(this.searchTerm.toLowerCase())
          )) ||
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
}

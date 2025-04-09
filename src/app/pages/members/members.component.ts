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
import { MemberService } from '../../services/member.service';

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
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.members = members;
    });
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

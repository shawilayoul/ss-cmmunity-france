import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from '../../services/member.service';
@Component({
  selector: 'app-request-membership-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './request-membership-dialog.component.html',
  styleUrls: ['./request-membership-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RequestMembershipDialogComponent {
  membershipForm: any;
  regions = [
    'Paris',
    'Lyon',
    'Marseille',
    'Lille',
    'Toulouse',
    'Other France',
    'Outside France',
  ];

  roles = ['member', 'volunteer', 'organizer'];

  constructor(
    private dialogRef: MatDialogRef<RequestMembershipDialogComponent>,
    @Inject(FormBuilder) private fb: FormBuilder,
    private memberService: MemberService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.membershipForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      region: ['', Validators.required],
      role:['',Validators.required],
      skills: [''],
      interests: [''],
    });
  }

  onSubmit() {
    if (this.membershipForm.invalid) return;

    const formValue = this.membershipForm.value;
    const payload = {
      name: formValue.fullName,
      email: formValue.email,
      phone: formValue.phone,
      region: formValue.region,
      role: formValue.role,
      skills: formValue.skills?.split(',').map((skill: string) => skill.trim()),
      bio: formValue.interests,
      isActive: true,
      joinedDate: new Date(),
      profilePhoto: '',
    };
    if (this.membershipForm.valid) {
      this.memberService.createMember(payload).subscribe({
        next: (response) => {
          console.log('Member created:', response);
          this.dialogRef.close(); // close dialog on success
        },
        error: (error) => {
          console.error('Error creating member:', error);
        },
      });
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-membership-dialog',
  standalone: true,  // Add this since you're using imports
  imports: [
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './request-membership-dialog.component.html',
  styleUrls: ['./request-membership-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class RequestMembershipDialogComponent {
  membershipForm: any;
  regions = [
    'Paris', 'Lyon', 'Marseille', 'Lille', 'Toulouse', 
    'Other France', 'Outside France'
  ];

  constructor(
    private dialogRef: MatDialogRef<RequestMembershipDialogComponent>,
    @Inject(FormBuilder) private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.membershipForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      region: ['', Validators.required],
      skills: [''],
      interests: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.membershipForm.valid) {
      this.dialogRef.close(this.membershipForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from '../../admin/layouts/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../admin/layouts/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterModule, AdminHeaderComponent, AdminFooterComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}

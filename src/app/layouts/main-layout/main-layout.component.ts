import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MembersComponent } from './pages/members/members.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EventListComponent } from './admin/events/event-list/event-list.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdmiMembersComponent } from './admin/admi-members/admi-members.component';
import { GalleyAdminComponent } from './admin/galley-admin/galley-admin.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'events', component: EventsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'members', component: MembersComponent },
      { path: 'gallery', component: GalleryComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'eventList', component: EventListComponent },
      { path: 'members', component: AdmiMembersComponent },
      {path:'gallery',component: GalleyAdminComponent}
    ],
  },
];

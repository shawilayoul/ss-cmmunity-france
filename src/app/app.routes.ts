import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MembersComponent } from './pages/members/members.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { EventListComponent } from './admin/events/event-list/event-list.component';
import { EventFormComponent } from './admin/events/event-form/event-form.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'members', component: MembersComponent },
  { path: 'admin', component: DashboardComponent },
  {path: 'gallery', component:GalleryComponent},
  {path:'admin/eventList', component:EventListComponent},
  {path:'admin/events/new', component:EventFormComponent},
  {path:'admin/dashboard',component:DashboardComponent}
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'members', component: MembersComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

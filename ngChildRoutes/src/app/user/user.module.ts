import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAdminListComponent } from './user-admib-list/user-admib-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users', component: UsersComponent, children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: UserListComponent },
          { path: 'admins', component: UserAdminListComponent },
          { path: ':id', component: UserDetailsComponent },
        ]
      }
    ])
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserAdminListComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }

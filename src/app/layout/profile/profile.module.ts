import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserComponent } from '../../profile/user/user.component';
import { SkillComponent } from '../../profile/skill/skill.component';


@NgModule({
  declarations: [ProfileComponent,
    UserComponent,
    SkillComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

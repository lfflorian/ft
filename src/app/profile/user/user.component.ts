import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Strengths, User } from 'src/app/model/user';
import { ShareSkillService } from 'src/app/services/share-skill.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService : UserService,
              private shareSkill: ShareSkillService) { }

  userId : string;
  user: User;
  expert: Strengths[];
  proficient: Strengths[];
  novice: Strengths[];
  noExperienceInterested: Strengths[];
  subscription: Subscription;

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id")
    this.userService.getUser(this.userId).subscribe(user => {
      this.user = user;
      this.expert = this.user.strengths.filter(f => f.proficiency == 'expert');
      this.proficient = this.user.strengths.filter(f => f.proficiency == 'proficient');
      this.novice = this.user.strengths.filter(f => f.proficiency == 'novice');
      this.noExperienceInterested = this.user.strengths.filter(f => f.proficiency == 'no-experience-interested');
    })
    
  }

  skillSelected(skill : Strengths) {
    this.shareSkill.shareSkill(skill)
    this.router.navigateByUrl(`profile/skill`)
  }
}

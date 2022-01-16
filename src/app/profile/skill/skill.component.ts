import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Strengths } from 'src/app/model/user';
import { usersFromSearch } from 'src/app/model/usersFromSearch';
import { SearchService } from 'src/app/services/search.service';
import { ShareSkillService } from 'src/app/services/share-skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(private shareSkill: ShareSkillService,
              private searchService: SearchService,
              private router: Router) { }

  skill: Strengths;
  subscription: Subscription;
  users: usersFromSearch;

  ngOnInit(): void {
    this.subscription = this.shareSkill.currentSkill.subscribe(skill => {
      this.skill = skill
      this.searchService.searchUsers(this.skill.name, this.skill.proficiency).subscribe(data => {
        this.users = data;
      })
    })
  }

  goToProfile(username: string) {
    this.router.navigateByUrl(`profile/user/${username}`)
  }
}

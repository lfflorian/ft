import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  User: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile() {
    this.router.navigateByUrl(`profile/user/${this.User}`)
  }
}

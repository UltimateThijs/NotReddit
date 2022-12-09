/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ICommunity } from '@not-reddit/data';
import { CommunityService } from './community.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-communityoverview',
  templateUrl: './communityoverview.component.html',
  styleUrls: ['./communityoverview.component.css'],
})
export class CommunityoverviewComponent implements OnInit {
  communities: ICommunity[] = [];
  isLoggedIn = false;

  constructor(
    private communityService: CommunityService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.communityService.getCommunities().subscribe((lists) => {
      this.communities = lists;
      console.log(lists);
    });
    this.authService.loggedStatus.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }
}
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { IPost } from '@not-reddit/data';
import { CommunityService } from '../community.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
})
export class CommunityDetailComponent implements OnInit {
  posts: IPost[] = [];
  isLoggedIn = false;
  communityId: string | null = null;

  constructor(
    private communityService: CommunityService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.communityId = params.get('id');
      this.communityService
          // .getCommunityByIdAsObservable(this.communityId)
    });
    this.communityService.getPosts().subscribe((lists) => {
      this.posts = lists;
      console.log(lists);
    });
    this.authService.loggedStatus.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }
}

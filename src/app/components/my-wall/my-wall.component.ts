import { Component, OnInit, OnDestroy } from '@angular/core';

/* SUBSCRIPTION */
import { Subscription } from 'rxjs/Subscription';

/* SERVICE */
import { ProfileService, PostInterface } from '../../services/profile.service';

@Component({
  selector: 'app-my-wall',
  templateUrl: './my-wall.component.html',
  styleUrls: ['./my-wall.component.css']
})
export class MyWallComponent implements OnInit, OnDestroy {

  private _myWall: PostInterface[] = [];
  private _myWallSubscription: Subscription;

  private _me: any = [];

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this._myWallSubscription = this._profileService.myPosts$
    .subscribe( myPosts => {
      this._myWall = myPosts;
    });

    this._profileService.myPosts();
    this._me = this._profileService.me();
  }

  ngOnDestroy(): void {
    this._myWallSubscription.unsubscribe();
  }

  postNow(post) {
    if (post !== undefined && post.trim() !== '') {
      this._profileService.newPost(post);
    }
  }
}

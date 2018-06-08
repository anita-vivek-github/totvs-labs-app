import { Component, OnInit, OnDestroy } from '@angular/core';

/* SUBSCRIPTION */
import { Subscription } from 'rxjs/Subscription';

/* SERVICE */
import { ProfileService, PostInterface } from '../../services/profile.service';

@Component({
  selector: 'app-friend-feeds',
  templateUrl: './friend-feeds.component.html',
  styleUrls: ['./friend-feeds.component.css']
})
export class FriendFeedsComponent implements OnInit, OnDestroy {

  private _feeds: PostInterface[] = [];
  private _myFriendsFeedSubscription: Subscription;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this._myFriendsFeedSubscription = this._profileService.myFriendsFeed$
    .subscribe(feeds => {
      this._feeds = feeds;
    });

    this._profileService.myFriendsFeed();
  }

  ngOnDestroy(): void {
    this._myFriendsFeedSubscription.unsubscribe();
  }

}

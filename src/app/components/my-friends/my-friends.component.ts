import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

/* SUBSCRIPTION */
import { Subscription } from 'rxjs/Subscription';

/* SERVICE */
import { ProfileService, UserInterface } from '../../services/profile.service';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit, OnDestroy {

  private _myFriends: UserInterface[] = [];
  private _myFriendsSubscription: Subscription;

  constructor(private _profileService: ProfileService, private _ref: ChangeDetectorRef) { }

  ngOnInit() {
    this._myFriendsSubscription = this._profileService.myFriends$
    .subscribe(myFriends => {
      this._myFriends = [];
      myFriends.forEach(friend => {
        this._myFriends.push({...friend});
      });
    });

    this._profileService.myFriends();
  }

  ngOnDestroy(): void {
    this._myFriendsSubscription.unsubscribe();
  }
}

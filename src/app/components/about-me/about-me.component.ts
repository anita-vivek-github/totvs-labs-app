import { Component, OnInit } from '@angular/core';

/* SUBSCRIPTION */

/* SERVICE */
import { ProfileService, UserInterface } from '../../services/profile.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  private _me: UserInterface;
  private _myFriends: UserInterface[];

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this._me = this._profileService.me();
    this._profileService.myFriends$.subscribe((friends) => {
      this._myFriends = friends;
    });
    this._profileService.myFriends();
  }

}

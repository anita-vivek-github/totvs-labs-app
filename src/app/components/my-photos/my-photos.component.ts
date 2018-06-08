import { Component, OnInit, OnDestroy } from '@angular/core';

/* SUBSCRIPTION */
import { Subscription } from 'rxjs/Subscription';

/* SERVICE */
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit, OnDestroy {

  private _photos: string[] = [];
  private _photoSubscription: Subscription;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this._photoSubscription = this._profileService.recentPhotos$
    .subscribe(photos => {
      this._photos = photos;
    });

    this._profileService.recentPhotos();
  }

  ngOnDestroy(): void {
    this._photoSubscription.unsubscribe();
  }
}

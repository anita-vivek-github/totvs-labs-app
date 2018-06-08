import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/* SUBSCRIPTION */
import { Subscription } from 'rxjs/Subscription';

/* SERVICE */
import { ProfileService, PostInterface, UserInterface } from '../../services/profile.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() postType: string;

  private _postsSubscription: Subscription;
  private _posts: PostInterface[] = [];

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this._postsSubscription = this._profileService.postsDataSource(this.postType)
      .subscribe(posts => {
        this._posts = posts;
      });
  }

  ngOnDestroy(): void {
    this._postsSubscription.unsubscribe();
  }

}

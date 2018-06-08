// tslint:disable:max-line-length

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _recentPhotosDataSource = new BehaviorSubject<string[]>([]);
  public recentPhotos$ = this._recentPhotosDataSource.asObservable();

  private _myPostsDataSource = new BehaviorSubject<PostInterface[]>([]);
  public myPosts$ = this._myPostsDataSource.asObservable();

  public _myFriendsFeedDataSource = new BehaviorSubject<PostInterface[]>([]);
  public myFriendsFeed$ = this._myFriendsFeedDataSource.asObservable();

  public _myFriendsDataSource = new BehaviorSubject<UserInterface[]>([]);
  public myFriends$ = this._myFriendsDataSource.asObservable();

  /* data that we pretend we got by making HTTP calls */

  private _statuses = [
    {
      handle: '@johnsmith',
      status: 'Howdy !',
      online: true,
    },
    {
      handle: '@bobjoe',
      status: 'Busy...having fun !',
      online: true,
    },
    {
      handle: '@juliosanchez',
      status: 'la vida es bella',
      online: true,
    },
    {
      handle: '@michaelkern',
      status: 'Working hard(ly) !',
      online: true,
    },
    {
      handle: '@pastapete',
      status: 'Contemplating...',
      online: true,
    },
    {
      handle: '@gumbojones',
      status: 'Chillin..',
      online: true,
    }
  ];

  private _recentPhotos: string[] = [
    'https://images.unsplash.com/photo-1471679984494-b1491dff4144?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2cc6014c6fec051b91f7a022565cd6d9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=106140ef5cf1847ad7105e6d864ba87f&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1527896a195e76507c9b2b49c29e055&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1515018403349-872e8206d50a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b06fc389eae29b1772009b8733f2df3&auto=format&fit=crop&w=1978&q=80',
    'https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e102aa677c59a0556f91bfecf41f970&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1517340182-ddc4e441b011?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5d77fe4a3f2c55ea2fbb54c6acda62b&auto=format&fit=crop&w=2147&q=80',
    'https://images.unsplash.com/photo-1506377090191-823da62e11e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f5f6f2354cb5a24b64924ae7cd3a7fc&auto=format&fit=crop&w=1978&q=80',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7adacd8460808aaa0168f7cd060ec23&auto=format&fit=crop&w=2000&q=80'
  ];

  private _me: UserInterface = {
    name: 'Lukas Solo',
    handle: '@lukassolo',
    photo: 'https://images.unsplash.com/photo-1523364583621-23af08364dc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ac7c82c76e28433baafbb49deeb4e5&auto=format&fit=crop&w=1949&q=80',
    status: 'Vacationing...at an unbelievable place !',
    online: true,
    about: 'Hiker, Biker, Swimmer, Surfer, Coder'
  };

  private _myFriends: UserInterface[] = [
    {
      name: 'John Smith',
      handle: '@johnsmith',
      status: this._statuses.find(status => status.handle === '@johnsmith').status,
      photo: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=2000&q=80',
      online: this._statuses.find(status => status.handle === '@johnsmith').online,
      about: 'Food enthusiast, Gourmet Chef'
    },
    {
      name: 'Bob Joe',
      handle: '@bobjoe',
      status: this._statuses.find(status => status.handle === '@bobjoe').status,
      photo: 'https://images.unsplash.com/photo-1520596880803-6ea0113a42d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85e4f2ee22a7cb65f886b260a703cc1b&auto=format&fit=crop&w=1950&q=80',
      online: this._statuses.find(status => status.handle === '@bobjoe').online,
      about: 'Loves Parkour'
    },
    {
      name: 'Julio Sanchez',
      handle: '@juliosanchez',
      status: this._statuses.find(status => status.handle === '@juliosanchez').status,
      photo: 'https://images.unsplash.com/photo-1498426317435-c4a0ebd4774f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c44242cab0cdfc2e518707bd883890f5&auto=format&fit=crop&w=1950&q=80',
      online: this._statuses.find(status => status.handle === '@juliosanchez').online,
      about: 'Hiker, Foodie, Father, Coder'
    },
    {
      name: 'Michael Kern',
      handle: '@michaelkern',
      status: this._statuses.find(status => status.handle === '@michaelkern').status,
      photo: 'https://images.unsplash.com/photo-1489980869433-d1f7c7ac0fcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=880bd32be08b3f34597fa38bfbbb9f13&auto=format&fit=crop&w=1950&q=80',
      online: this._statuses.find(status => status.handle === '@michaelkern').online,
      about: 'Programmer, Manger, Photographer'
    },
    {
      name: 'Pasta Pete',
      handle: '@pastapete',
      status: this._statuses.find(status => status.handle === '@pastapete').status,
      photo: 'https://images.unsplash.com/photo-1485274466491-6c0baa1cfc2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a638b2b41d48f0bea0d5cf63f5cee011&auto=format&fit=crop&w=1950&q=80',
      online: this._statuses.find(status => status.handle === '@pastapete').online,
      about: 'Italian, Foodie, Pasta Lover'
    },
    {
      name: 'Gumbo Jones',
      handle: '@gumbojones',
      status: this._statuses.find(status => status.handle === '@gumbojones').status,
      photo: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1950&q=80',
      online: this._statuses.find(status => status.handle === '@gumbojones').online,
      about: 'Louisiana Native, Loves Gumbo'
    }
  ];

  private _myPosts: PostInterface[] = [
    {
      user: this._me,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      postTime: '1 hr',
      responses: []
    },
    {
      user: this._me,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
      postTime: '2 hrs',
      responses: [
        {
          user: this._myFriends.find(friend => friend.handle === '@juliosanchez'),
          message: 'Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.',
          postTime: '2 hrs',
          responses: []
        },
        {
          user: this._myFriends.find(friend => friend.handle === '@pastapete'),
          message: 'Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.',
          postTime: '3 hrs',
          responses: []
        },
      ]
    },
  ];

  private _myFeeds: PostInterface[] = [
    {
      user: this._myFriends.find(friend => friend.handle === '@johnsmith'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.',
      responses: []
    },
    {
      user: this._myFriends.find(friend => friend.handle === '@bobjoe'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.',
      responses: []
    },
    {
      user: this._myFriends.find(friend => friend.handle === '@juliosanchez'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.',
      responses: []
    },
    {
      user: this._myFriends.find(friend => friend.handle === '@michaelkern'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem.',
      responses: []
    },
    {
      user: this._myFriends.find(friend => friend.handle === '@pastapete'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.',
      responses: []
    },
    {
      user: this._myFriends.find(friend => friend.handle === '@gumbojones'),
      postTime: '31m',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem.',
      responses: []
    }
  ];

  constructor() { }

  public recentPhotos() {
    /* since this is just for demo, pretend we are making a call by simulating a random delay */
    this._recentPhotosDataSource.next([]);
    setTimeout(() => {
      this._recentPhotosDataSource.next(this._recentPhotos);
    }, Math.floor(Math.random() * 500));
  }

  public myFriendsFeed() {
    /* since this is just for demo, pretend we are making a call by simulating a random delay */
    this._myFriendsFeedDataSource.next([]);
    setTimeout(() => {
      this._myFriendsFeedDataSource.next(this._myFeeds);
    }, Math.floor(Math.random() * 500));
  }

  public myPosts() {
    /* since this is just for demo, pretend we are making a call by simulating a random delay */
    this._myPostsDataSource.next([]);
    setTimeout(() => {
      this._myPostsDataSource.next(this._myPosts);
    }, Math.floor(Math.random() * 500));
  }

  public myFriends() {
    /* since this is just for demo, pretend we are making a call by simulating a random delay */
    this._myFriendsDataSource.next([]);
    setTimeout(() => {
      this._myFriendsDataSource.next(this._myFriends);
    }, Math.floor(Math.random() * 500));

    /* simulate the online/offline status changing for the friends */
    window.setInterval(() => {
      const idx = Math.floor(Math.random() * this._myFriends.length);
      this._myFriends[idx].online = !this._myFriends[idx].online;
      this._myFriendsDataSource.next(this._myFriends);
    }, 5000);
  }

  public me() {
    return this._me;
  }

  public newPost(message: string) {
    const new_post: PostInterface = {
      user: this._me,
      message: message,
      postTime: new Date().getSeconds() + 's ago', // Date.now().getSeconds(),
      responses: []
    };

    this._myPosts.unshift(new_post);

    setTimeout(() => {
      this._myPostsDataSource.next(this._myPosts);
    }, Math.floor(Math.random() * 700));
  }

  public postsDataSource(postType: string): Observable<PostInterface[]> {

    if (postType === 'friends_feeds') { return this.myFriendsFeed$; }

    if (postType === 'my_posts') { return this.myPosts$; }

    return null;
  }
}

/* interface to represent data about a user/friend */
export interface UserInterface {
  name: string;
  handle: string;
  status: string;
  photo: string;
  online: boolean;
  about: string;
}

/* interface to represent data about a post */
export interface PostInterface {
  user: UserInterface;
  message: string;
  postTime?: string;
  responses?: PostInterface[];
}

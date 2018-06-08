import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyPhotosComponent } from './components/my-photos/my-photos.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PostsComponent } from './components/posts/posts.component';
import { FriendFeedsComponent } from './components/friend-feeds/friend-feeds.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { MyWallComponent } from './components/my-wall/my-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPhotosComponent,
    AboutMeComponent,
    PostsComponent,
    FriendFeedsComponent,
    MyFriendsComponent,
    MyWallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

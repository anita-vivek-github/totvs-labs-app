import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFeedsComponent } from './friend-feeds.component';

describe('FriendFeedsComponent', () => {
  let component: FriendFeedsComponent;
  let fixture: ComponentFixture<FriendFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

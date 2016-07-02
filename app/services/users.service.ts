import { IUser, User } from '../utils/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  users: IUser[] = [
    new User('Dima', 'Panasyuk', 'mitya', new Date('11/10/1997').getTime(), 18, 'http://www.suave.com/Images/2072/2072-665335-Category%20Hero%20Images_Mens.png', []),
    new User('Addy', 'Osmani', 'osmani', new Date('24/11/1992').getTime(), 19, 'http://67.media.tumblr.com/1233fb3e9e209c28e49da269b0de301a/tumblr_inline_n143bfJWJR1rzpf4l.png', []),
    new User('Deborah', 'Kurata', 'dkurata', new Date('4/1/1985').getTime(), 19, 'http://kingofwallpapers.com/girl/girl-017.jpg', [])
  ];
  getUsers(): IUser[] {
    return this.users;
  };
};

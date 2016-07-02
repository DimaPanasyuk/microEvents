import { IUser, User } from '../utils/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  users: IUser[] = [
    new User('Dima', 'Panasyuk', 'mitya', new Date('11/10/1997').getTime(), 18, 'http://www.suave.com/Images/2072/2072-665335-Category%20Hero%20Images_Mens.png', []),
    new User('Nazar', 'Shimko', 'shimko', new Date('24/11/1996').getTime(), 19, 'http://67.media.tumblr.com/1233fb3e9e209c28e49da269b0de301a/tumblr_inline_n143bfJWJR1rzpf4l.png', []),
    new User('Anna', 'Kushik', 'kushik', new Date('4/1/1996').getTime(), 19, 'http://weknowyourdreams.com/image.php?pic=/images/girl/girl-03.jpg', [])
  ];
  getUsers(): IUser[] {
    return this.users;
  };
};

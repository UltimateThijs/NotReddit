// import { IUser } from '@not-reddit/data';
// import { UserService } from './user.service';

// const expectedUserData: IUser = {
//   id: 0,
//   username: 'testuser',
//   emailAddress: 'testuser@example.com',
// };

// describe('userService', () => {
//   let userService: UserService;

//   beforeEach(() => {
//     userService = new UserService();
//     userService.clearUsers();
//     userService.addUser(expectedUserData);
//   });
//   it('get list of users', () => {
//     let userCount: number | undefined;
//     userCount = userService.getUsers().length;
//     expect(userCount).toBe(1);
//   });
//   it('get list of users empty list', () => {
//     let userCount: number | undefined;
//     userService.deleteUser(0);
//     userCount = userService.getUsers().length;
//     expect(userCount).toBe(0);
//   });
//   it('get user by id', () => {
//     const user = userService.getUserById(0);
//     expect(user.username).toBe('testuser');
//   });
//   it('get user by id empty list', () => {
//     userService.clearUsers();
//     expect(function () {
//       userService.getUserById(10);
//     }).toThrow(new Error('User list is empty'));
//   });
// });
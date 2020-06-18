import { Component } from '@angular/core';
import { UserApiProvider } from '../../providers/user-api/user-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  isLoading: any = false;

  constructor(
    private userAPI: UserApiProvider
  ) { }

  ionViewDidEnter() {
    this.loadUsers();
  }

  loadUsers(refresher?: any) {
    this.isLoading = true;
    this.userAPI.getUsers().then(result => {
      console.log('getUsers() success', result);

      if (refresher) refresher.complete();

      this.users = result["data"];
      this.isLoading = false;
    }).catch(error => {
        console.log('getUsers() error', error);
        if (refresher) refresher.complete();
        this.isLoading = false;
    });
  }

  doRefresh(refresher) {
    console.log('Begin async pull-refresh...');
    setTimeout(() => {
      (!this.isLoading) ? this.loadUsers(refresher) : refresher.complete();
    }, 500); // 0.5s delay

  }

}

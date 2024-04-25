import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exam-angular';

  data: any;

  constructor(private user_service: UserService) {
    this.user_service.getUsers().subscribe((data) => {
      this.data = data;
    });
  }

  downloadJson() { 

    let data = [];
    this.data.users.forEach(user => {
      data.push({
        firstname: user.firstName,
        lastname: user.lastName,
      });
    });
    const fileName = "data.json";
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

}

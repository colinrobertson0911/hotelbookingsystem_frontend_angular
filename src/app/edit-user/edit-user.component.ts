import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm = new User();

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userUsername = this.route.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(userUsername).subscribe(data => {
      this.editUserForm = data as User;
    })
  }

   editUser() {
    this.userService.editUserSubmit(this.editUserForm).subscribe(data=> {
      this.router.navigate(['/user-list']);
    })
   }

}

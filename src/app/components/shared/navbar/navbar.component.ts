import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getEmployees(idEmployee: number) {
    console.log(idEmployee);
    if (!idEmployee) {
      this.router.navigate(['/search']);
    }
    this.router.navigate(['/search', idEmployee]);
  }
}

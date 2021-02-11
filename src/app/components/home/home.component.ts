import { Component, OnInit } from '@angular/core';
import { MasGlobalService } from '../../services/masglobal.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  employees: Employee[];
    
  constructor(private masGlobalService: MasGlobalService) {}

  ngOnInit(): void {
    this.masGlobalService.getAllEmployees().subscribe(
      (employess) => {        
        this.employees = employess;
      }
    );
  }
}

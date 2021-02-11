import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasGlobalService } from '../../services/masglobal.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  employees: Employee[] = [];
  error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private masGlobalService: MasGlobalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params['id']) {
        this.getAllEmployees();
      } else {
        this.getEmployeeById(params['id']);
      }
    });
  }

  getAllEmployees() {
    this.masGlobalService.getAllEmployees().subscribe(
      (employees) => {            
        this.error = false;  
        if (employees) {
          this.employees = employees;
        }
      },
      (error) => {
        this.error = true;
      }
    );
  }

  getEmployeeById(id: number) {
    this.masGlobalService.getEmployeeById(id).subscribe(
      (employee) => {
        this.employees = [];
        if (employee) {
          this.employees.push(employee);
        }
      },
      (error) => {
        this.employees = [];
        this.error = true;
      }
    );
  }
}

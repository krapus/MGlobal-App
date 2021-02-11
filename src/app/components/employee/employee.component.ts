import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employees: Employee[];

  constructor() {}

  ngOnInit(): void {}
}

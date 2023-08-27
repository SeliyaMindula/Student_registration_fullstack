/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudentRequest: Student = {
    id:'',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    nic: '',
    address: '',
  };
  constructor(private studentService:StudentsService, private router: Router) {}
  ngOnInit(): void {

  }

  addStudents() {
    //console.log(this.addStudentRequest);
    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next:(student) =>{
        //console.log(student);
        this.router.navigate(['students'])
      }
    })
  }
}*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudentRequest: Student = {
    id: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    nic: '',
    address: '',
  };
  constructor(private studentService:StudentsService, private router: Router) {}
  ngOnInit(): void {

  }

  addStudents() {
    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next:(student) =>{
        this.router.navigate(['students'])
      }
    })
  }
}




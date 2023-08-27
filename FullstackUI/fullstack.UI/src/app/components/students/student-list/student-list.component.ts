
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0; 
  tableSize: number = 5; 

  sortField: string | null = null;
  sortOrder: 'asc' | 'desc' | null = null;

  searchTerm: string = '';
  filteredStudents: Student[] = [];

  students: Student[] = [];

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(): void {
    this.studentService.getAllStudents().subscribe({
      next: (students: Student[]) => {
        if (Array.isArray(students)) {
          this.students = students;
          this.filteredStudents = [...students];
          this.count = students.length;  
          this.onSearch(); 
        } else {
          console.error('Invalid data received:', students);
        }
      },
      error: (error: any) => {
        console.error('An error occurred while fetching students:', error);
        this.students = [];
        this.filteredStudents = [];
      }
    });
  }

  onTableDataChange(event: any): void {
    this.page = Number(event);
    
  }

  onTableSizeChange(event: any): void {
    this.tableSize = Number(event.target.value);
    this.page = 1;
  
  }

  sortStudents(field: keyof Student): void {
    this.sortField = field;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    
    this.filteredStudents.sort((a, b) => {
      if (a[field] < b[field]) return this.sortOrder === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  onSearch(): void {
    this.filteredStudents = this.students.filter(student =>
      student.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.mobile.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      student.nic.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.count = this.filteredStudents.length; 
  }
}


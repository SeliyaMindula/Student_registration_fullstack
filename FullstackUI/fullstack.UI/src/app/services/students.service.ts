import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/students.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  //baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    //return this.http.get<Student[]>(this.baseApiUrl + '/api/Students');
    return this.http.get<Student[]>('https://localhost:7296/api/Students');
    
  }

  addStudent(addStudentRequest:Student): Observable<Student>{
    addStudentRequest.id ='00000000-0000-0000-0000-000000000000'
   return this.http.post<Student>('https://localhost:7296/api/Students',addStudentRequest);
  }

  getStudent( id:string):Observable<Student>{
     return this.http.get<Student>('https://localhost:7296/api/Students/' + id);
  }

  updateStudent(id:string, updateStudentRequest:Student):Observable<Student>{
    return this.http.put<Student>('https://localhost:7296/api/Students/' + id,updateStudentRequest);
  }

  deleteStudent(id:string):Observable<Student>{
    return this.http.delete<Student>('https://localhost:7296/api/Students/' + id);
  }
}

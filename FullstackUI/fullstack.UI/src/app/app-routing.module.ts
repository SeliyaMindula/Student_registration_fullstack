import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';

const routes: Routes = [
  {
    path:'',
    component: StudentListComponent
  },
  {
    path:'students',
    component: StudentListComponent
  },
  {
    path:'students/add',
    component: AddStudentComponent
  },
  {
    path:'students/edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

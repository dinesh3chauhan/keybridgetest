import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: HttpClient){
 
  }

  id:number = 0;
  formData ={
    title :'keybridge' ,
    dueDate:   new Date(),
    createdBy:  "",
    client:  "",
    project:  "",
    projectFilter: false,
    taskTitle: "",

    status: "",
    assignee: "",
    taskType:"",
    priority: "",
    notes: "",
    emailNotes: "",
    dueDateString: ""
  }


  saveForm(){
    debugger;
    this.formData.dueDateString =  this.formData.dueDate.toLocaleDateString();
    this.http.post<any>("http://localhost:8000/api/task", this.formData)
    .subscribe(data=>{
      this.id = data.id;
    });
  }
}

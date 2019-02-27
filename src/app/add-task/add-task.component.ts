import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  submitted = false;

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  taskForm(form: NgForm) {
    if (this.submitted === true) {
      console.log(form.value);
    }
  }

  ngOnInit() {
  }

}

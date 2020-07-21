import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-taskdilog',
  templateUrl: './taskdilog.component.html',
  styleUrls: ['./taskdilog.component.scss']
})
export class TaskdilogComponent implements OnInit {
  taskformForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskdilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm()
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(this.taskformForm.value);
    });   
  }



  initForm() {
    this.taskformForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onSubmit() {

  }

  fnCancel() {
    this.dialogRef.close(this.taskformForm.value);
  }



  
}

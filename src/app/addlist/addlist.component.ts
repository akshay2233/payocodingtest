import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.scss']
})
export class AddListComponent implements OnInit {
  taskformForm: FormGroup;
  textEnter: any;
  title: any;
  lstlist: any = []
  lstlistSelected: any = []

  focusname: any = 'aa'

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  panelOpenState = true;

  ngOnInit(): void {
    this.initForm()

    this.dialogRef.backdropClick().subscribe(() => {
      var data = { title: this.title, list: this.lstlist }
      this.dialogRef.close(data);

    })


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
    var data = { title: this.title, list: this.lstlist }
    this.dialogRef.close(data);


  }

  fnChangeText() {

    var reqParams: any = Object.assign({ name: this.textEnter, completed: false });
    this.lstlist.push(reqParams);
    setTimeout(() => {
      if (this.lstlist.length > 0) {
        var textbox: any = document.getElementById("#test" + (this.lstlist.length - 1));
        textbox.focus();
        textbox.scrollIntoView();
      }
    }, 10);


    this.textEnter = null;

  }


  fnChangeList(i) {

    var selected = this.lstlist.filter(r => r.completed)
    this.lstlistSelected = [...selected]
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskdilogComponent } from './taskdilog/taskdilog.component';
import { AddListComponent } from './addlist/addlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'payOCodeTest';
  dialogRef: any;
  dialogRefaddlist: any;
  searchText: any = null;

  list: any = [];
  constructor(
    private dialog: MatDialog

  ) {

  }

  ngOnInit(){
    this.list = this.fnGetFromLocalStorage();
  }



  fnOpenTaskDilog() {
    this.dialogRef = this.dialog.open(TaskdilogComponent, {
      width: '550px',
      disableClose: false,
      position: { top: '30px' }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      debugger
      if (result && (result.title || result.description)) {
        this.list.unshift(result);
        this.fnSaveInlocalStorage(this.list);


      }
    });
  }


  fnOpenAddlist(event) {
    event.stopPropagation()
    this.dialogRefaddlist = this.dialog.open(AddListComponent, {
      width: '550px',
      disableClose: false,
      position: { top: '30px' }
    });
    this.dialogRefaddlist.afterClosed().subscribe(result => {
      debugger
      if (result && (result.title || result.list.length > 0)) {
        this.list.unshift(result);
        this.fnSaveInlocalStorage(this.list);

      }
    });
  }


  fnSaveInlocalStorage(data) {
    var reqData = JSON.stringify(data);
    window.localStorage.setItem('list', reqData);

  }
  fnGetFromLocalStorage() {
    var reqData = window.localStorage.getItem('list');
    if (reqData) {
      return JSON.parse(reqData)
    } else {
      return [];
    }


  }
  fnClickDelete(i){
    this.list.splice(i, 1);
    this.fnSaveInlocalStorage(this.list);


  }

}

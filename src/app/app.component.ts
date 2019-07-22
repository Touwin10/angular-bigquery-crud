import { Component } from '@angular/core';
import { BigqueryService } from './services/bigquery/bigquery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bigquery';
  myDatasetName = 'myDataset';
  myTableName = 'todolist';
  todolist: any[] = [];

  constructor(private bqSrv: BigqueryService) { }


  createTable() {
    const q = `CREATE TABLE IF NOT EXISTS ${this.myDatasetName}.${this.myTableName} (id STRING, title STRING, description STRING)`;

    this.bqSrv.onQuery(this.myDatasetName, q)
      .subscribe(result => {
        console.log(result);
      })
  }


  insertTask() {
    const q = `
    INSERT INTO ${this.myDatasetName}.${this.myTableName}
    (id, title, description)
    VALUES ('1', 'do this', 'for today')`;

    this.bqSrv.onQuery(this.myDatasetName, q)
      .subscribe(result => {
        console.log(result);
      });
  }

  selectAllTask() {
    const q = `SELECT * FROM ${this.myDatasetName}.${this.myTableName}`;
    this.bqSrv.onQuery(this.myDatasetName, q)
      .subscribe(result => {
        console.log(result);
        if (!result)
          return;
        const data = result['result'][0];
        this.todolist = data;

      });
  }

  updateTask() {
    const q = `UPDATE ${this.myDatasetName}.${this.myTableName} SET description='for tomorrow' WHERE id='1'`;
    this.bqSrv.onQuery(this.myDatasetName, q)
      .subscribe(result => {
        console.log(result);
      });
  }

  deleteTask() {
    const q = `DELETE FROM ${this.myDatasetName}.${this.myTableName} WHERE id='1'`;
    this.bqSrv.onQuery(this.myDatasetName, q)
      .subscribe(result => {
        console.log(result);
      });
  }

}

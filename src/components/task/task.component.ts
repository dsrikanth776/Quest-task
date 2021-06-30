import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  PeriodicElement = [
    {
      studydate:'27/06/2021',
      patientname: 'Sreekanth',
      Modality: 'Runny Nose',
      sex: 'Male'
    },
    {
      studydate:'20/06/2021',
      patientname: 'Bharath',
      Modality: 'Broken Bone',
      sex: 'Male'
    },
    { studydate: '29/06/2021', patientname: 'Ramya', Modality: 'Flu', sex: 'Female' },
    {
      studydate:'25/06/2021',
      patientname: 'Haritha',
      Modality: 'Fever',
      sex: 'Female'
    },
    {
      studydate:'26/06/2021',
      patientname: 'Venkata Ramana',
      Modality:' Cancer ',
      sex: 'Male'
    },
    {
      studydate:'30/06/2021',
      patientname: 'Srinivasulu',
      Modality: 'Allergies and asthma',
      sex: 'Male'
    },
    {
      studydate:'07/06/2021',
      patientname: 'Geetha',
      Modality: 'Heart disease',
      sex: 'Female'
    },
    {
      studydate:'10/06/2021',
      patientname: 'Rajesh',
      Modality: 'Diabetes',
      sex: 'Male'
    },
    { studydate: '16/06/2021',
       patientname: 'Ravi', 
       Modality: 'Influenza and pneumonia',
        sex: 'Male' },
    {
      studydate:'29/06/2021',
      patientname: 'Viswanth',
      Modality: 'Kidney disease',
      sex: 'Male'
    }
  
  ];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  displayedColumns : any = ['patientname','studydate','Modality','sex']  
  dataSource : any = new MatTableDataSource<PeriodicElement>()

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.PeriodicElement)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
export interface PeriodicElement {
  patientname: string;
  studydate: string;
  Modality: string;
  sex: string;
}

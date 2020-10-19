import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    students: any[] = [
        {
            ID: '11815004', Name: 'ABC',
            DOB: '12/8/1999', Gender: 'Male', CourseFee: 1234.56
        },
        {
            ID: '11847441', Name: 'Anurag', 
            DOB: '10/14/1999', Gender: 'Male', CourseFee: 6666.00
        },
        {
            ID: '11745312', Name: 'Raye', 
            DOB: '7/24/1998', Gender: 'Female', CourseFee: 6543.15
        },
        {
            ID: '11722866', Name: 'Kia', 
            DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
        },
        {
            ID: '11805422', Name: 'Sam',
            DOB: '4/12/1999', Gender: 'Male', CourseFee: 9876.54
        }
    ];
}
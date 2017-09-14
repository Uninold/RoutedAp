import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  studentCollection: Array<object> = [];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages = ' ';
  printing = false;


  private checkPatterns(value: any, pattern: RegExp): boolean {
    if (pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const yearPattern = /^[1-5]+$/;

    if (this.checkPatterns(this.studNo, numberPattern) && this.checkPatterns(this.studFname, stringPattern) &&
      this.checkPatterns(this.studLname, stringPattern) && this.checkPatterns(this.studProg, stringPattern) &&
      this.checkPatterns(this.studYr, yearPattern)){

        this.studentRecord = {
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname, 
          studProgram: this.studProg,
          studYear: this.studYr
        };

        this.studentCollection.push(this.studentRecord);

        this.messages = null;
        this.clearList();
      } else {
        this.messages =  'Errors have been encountered therefore cannot continue process requested operation';
        return false;
      }
  }


  listStudentEntry(): void{
    this.printing = true;
    console.log('Displays values input!');
  }
  

  clearList(): void {
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
  }
}
=======
  title = 'app';
}
>>>>>>> 8a146839a014cdb5513fb0b25198d3b2d8fe173f

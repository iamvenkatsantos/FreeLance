import { Component, OnInit } from "@angular/core";
import { DiplomaForm } from "../diplomaform";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-diploma",
  templateUrl: "./diploma.component.html",
  styleUrls: ["./diploma.component.css"]
})
export class DiplomaComponent {
  total;
  day;
  month;
  year;
  DOB;

  user: DiplomaForm = {
    Fname: "",
    Lname: "",
    DOB: null,
    male: "",
    age: "",
    Father_name: "",
    Father_occup: "",
    Father_income: "",
    Mother_name: "",
    Mother_occup: "",
    Mother_income: "",
    religion: "",
    Nationality: "",
    Community: "",
    Mobile_Number: null,
    Res_addr: "",
    Premanent_addr: "",
    Email: "",
    branch_choice1: "",
    branch_choice2: "",
    branch_choice3: "",
    previous_medium: "",
    previous_school: "",
    previous_passing: "",
    previous_regno: "",
    board_state: "",
    board_cbse: "",
    board_other: "",
    sslc_percentage: null,
    diploma_percentage: null,
    Caste: "",
    degree_BE: "",
    degree_BTECH: ""
  };
  constructor(private http: HttpClient) {}

  onGetvalue() {
    //alert("in value");
    this.http
      .post("http://52.201.242.116:3000/apinfo_diploma", this.user)
      .subscribe(
        data => {
          //alert("post req sucessfull"+data);
          /*alert(this.user.Fname+'\n'+this.user.Lname+'\n'+this.user.DOB+'\n'+this.user.male+'\n'+this.user.Family_name+'\n'+this.user.Family_occup
       +'\n'+this.user.Family_income+'\n'+'\n'+this.user.Caste+'\n'+this.user.Nationality+'\n'+this.user.hsc_total_marks+'\n'+this.user.hsc_xtra
       +'\n'+this.user.previous_school+'\n'+this.user.religion+'\n'+this.user.age);*/
          console.log("post req sucessfull", data);
          alert("Your data submitted successfully");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}

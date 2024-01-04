import { Component } from '@angular/core';
import { csvResponse } from 'src/app/Admin/services/readcsv/readCSV.Model';
import { ReadcsvService } from 'src/app/Admin/services/readcsv/readcsv.service';
import { SendMailService } from 'src/app/Admin/services/send-mail/send-mail.service';
import { mailRequest } from 'src/app/Admin/services/send-mail/sendMailRequest.Model';


@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.css']
})
export class ReadCsvComponent {
  csvData:csvResponse[] = []
  body:mailRequest=new mailRequest()
  mailStatus:boolean = false
  selectedBtn!:number
  constructor(private readCsv:ReadcsvService,private sendEmail:SendMailService) { }

  getData(){
    this.readCsv.read().subscribe(
      (response)=>{
        console.log(response)
        this.csvData = response
      }
    )
  }

  sendMail(email:string,amount:string,btnNumber:number){
    // this.mailStatus = true
    this.selectedBtn = btnNumber
    this.body.email = email
    this.body.amount = amount
    console.log(email,amount)
    this.sendEmail.send(this.body).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    // console.log(email,btnNumber)
  }
}

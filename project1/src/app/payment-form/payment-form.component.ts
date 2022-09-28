import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paymentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    paymentType: new FormControl(''),
    amount: new FormControl(''),
    phoneNumber: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  
  payment = {
    "mid"           :  "abuibiuiiu",
    "orderId"       : "uhiuibo",
    "amount"        : "1303.00",
    "businessType"  : "UPI_QR_CODE",
    "posId"         : "S12_123"
  };

  submit(){
    console.log("form = ",this.paymentForm.value);
  }

 

}

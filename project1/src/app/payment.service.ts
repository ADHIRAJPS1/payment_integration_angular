import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  data = {
    body: {
    "mid": "aaaaaa",
    "orderId": "ijehfiur",
    "amount": 4558,
    "bussinesstype" : "ide",
    "posId" : "ei2eoh"
    },
    head:{
      "clientId": "C12",
      "version": "v1",
      "signature": "sign"
    }

  };

  paytmParams = JSON.stringify(this.data);

  url = 'https://securegw-stage.paytm.in/paymentservices/qr/create';

  payment(){
    return this.httpClient.post(this.url , this.paytmParams , {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
      },
    }  
  }


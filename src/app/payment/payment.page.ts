import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core'
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, AfterViewInit{
  txnid: string;

  constructor(public auth: AuthenticationService) { 
    
  }

  ngOnInit() {
  

    
  }
  ngAfterViewInit() {
  
  }

}

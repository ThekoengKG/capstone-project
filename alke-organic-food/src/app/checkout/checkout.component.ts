import { Router } from '@angular/router';
import { AuthGuardService } from './../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  strikeCheckout: any = null;

  constructor(private _authGuardService: AuthGuardService,
    private _router: Router) { }

  ngOnInit(): void {
    if (!this._authGuardService.isLoggedIn()) {
      this._router.navigate(['/login']);
    }
    this.stripePaymentGateway();
  }

  payNow() {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JRaJXKjv2DyVVU0hvh4tCQo6vhvVYhwzIWOn2KsD9ezJq61B3WbaQew5eqLRkIOk0VZ47ni8S4u6ND5vYtqQVpE00BjTPy4pt',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'MakePayment',
      description: 'Payment widgets',
      amount: 500 * 100
    });
    this._router.navigate(['/invoice']);
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
      window.document.body.appendChild(scr);
    }
  }
}

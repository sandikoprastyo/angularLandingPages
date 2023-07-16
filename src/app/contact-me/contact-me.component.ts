import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactMeService } from '../services/contact-me.service';

@Component({
  selector: 'app-cart',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  items = this.contactMeService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
  });

  constructor(
    private contactMeService: ContactMeService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    // this.contactMeService.addToContact(this.checkoutForm);
    // this.items = this.contactMeService.clearFormContact();
    this.checkoutForm.reset();
  }
}

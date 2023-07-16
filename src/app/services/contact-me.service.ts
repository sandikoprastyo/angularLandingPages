import { Injectable } from '@angular/core';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService {
  constructor() {}
  items: Contact[] = [];

  addToContact(value: Contact) {
    this.items.push(value);
  }

  getItems() {
    return this.items;
  }

  clearFormContact() {
    this.items = [];
    return this.items;
  }
}

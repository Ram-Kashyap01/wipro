import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import {UserserviceService} from "../../services/userservice.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];
  constructor(private userService:UserserviceService) { }

  // Get all conatcts by making GET request to json server
  ngOnInit(): void {
    this.userService.getAllContacts().subscribe(data => this.contacts=data);
  }

}

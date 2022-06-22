import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/Contact";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {
  }

  // Implement getAllContacts method using HttpClient for getting all Contacts details
  getAllContacts(): Observable<any> {
    return this.http.get<Contact[]>("http://localhost:3000/contacts");
  }
}

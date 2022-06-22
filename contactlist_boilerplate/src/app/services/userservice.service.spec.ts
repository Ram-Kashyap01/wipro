import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Contact } from 'src/app/models/Contact';
import { UserserviceService } from './userservice.service';

const contacts: Contact[] = [
  {
      name: 'Ravi',
      mobile: 1234567890
  },
  {
    name: 'abc',
    mobile: 9876543210
  },
  {
    name: 'xyz',
    mobile: 7834210723
  }
];

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserserviceService]
  }));

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service).toBeTruthy();
  });

  // testing service for getAllContacts method
  it('getAllContacts() should fetch allcontacts',
  inject([HttpTestingController, UserserviceService],
    (httpMock: HttpTestingController, service: UserserviceService) => {
      // We call the service
      service.getAllContacts().subscribe(data => {
        expect(data.data.length).toBe(3);
        expect(data.data).toEqual(contacts);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/contacts');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush({data: contacts });
      // httpMock.verify();
    })
);
});

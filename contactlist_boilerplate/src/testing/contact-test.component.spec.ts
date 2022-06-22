import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Contact } from 'src/app/models/Contact';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from 'src/app/components/contact/contact.component';

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

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let userService: UserserviceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ ContactComponent ],
      providers: [UserserviceService]
    })
    .compileComponents();
    userService = TestBed.inject(UserserviceService);
    spyOn(userService, 'getAllContacts').and.returnValue(of(contacts));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
});

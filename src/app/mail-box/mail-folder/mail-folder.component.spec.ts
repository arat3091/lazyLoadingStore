import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFolderComponent } from './mail-folder.component';

describe('MailFolderComponent', () => {
  let component: MailFolderComponent;
  let fixture: ComponentFixture<MailFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

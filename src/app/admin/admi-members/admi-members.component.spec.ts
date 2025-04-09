import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiMembersComponent } from './admi-members.component';

describe('AdmiMembersComponent', () => {
  let component: AdmiMembersComponent;
  let fixture: ComponentFixture<AdmiMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmiMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

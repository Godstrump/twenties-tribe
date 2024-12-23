import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsProfileComponent } from './mentors-profile.component';

describe('MentorsProfileComponent', () => {
  let component: MentorsProfileComponent;
  let fixture: ComponentFixture<MentorsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

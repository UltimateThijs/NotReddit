import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityoverviewComponent } from './communityoverview.component';

describe('CommunityoverviewComponent', () => {
  let component: CommunityoverviewComponent;
  let fixture: ComponentFixture<CommunityoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityoverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

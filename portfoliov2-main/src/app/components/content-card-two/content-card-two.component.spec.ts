import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardTwoComponent } from './content-card-two.component';

describe('ContentCardTwoComponent', () => {
  let component: ContentCardTwoComponent;
  let fixture: ComponentFixture<ContentCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

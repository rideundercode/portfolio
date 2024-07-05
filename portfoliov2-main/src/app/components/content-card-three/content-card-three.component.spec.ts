import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardThreeComponent } from './content-card-three.component';

describe('ContentCardThreeComponent', () => {
  let component: ContentCardThreeComponent;
  let fixture: ComponentFixture<ContentCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

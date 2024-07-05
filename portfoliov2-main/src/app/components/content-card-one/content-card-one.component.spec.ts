import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardOneComponent } from './content-card-one.component';

describe('ContentCardOneComponent', () => {
  let component: ContentCardOneComponent;
  let fixture: ComponentFixture<ContentCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCardOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

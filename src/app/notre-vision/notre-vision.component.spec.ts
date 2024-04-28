import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreVisionComponent } from './notre-vision.component';

describe('NotreVisionComponent', () => {
  let component: NotreVisionComponent;
  let fixture: ComponentFixture<NotreVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotreVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotreVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

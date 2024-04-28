import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosTalentsComponent } from './nos-talents.component';

describe('NosTalentsComponent', () => {
  let component: NosTalentsComponent;
  let fixture: ComponentFixture<NosTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosTalentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

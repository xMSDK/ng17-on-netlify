import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsItemComponent } from './talents-item.component';

describe('TalentsItemComponent', () => {
  let component: TalentsItemComponent;
  let fixture: ComponentFixture<TalentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

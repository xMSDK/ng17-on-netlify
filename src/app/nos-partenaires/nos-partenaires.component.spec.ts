import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosPartenairesComponent } from './nos-partenaires.component';

describe('NosPartenairesComponent', () => {
  let component: NosPartenairesComponent;
  let fixture: ComponentFixture<NosPartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosPartenairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

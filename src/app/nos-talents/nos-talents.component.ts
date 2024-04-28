import { Component, OnInit } from '@angular/core';
import { TalentsItemComponent } from '../components/talents-item/talents-item.component';
import { HttpClient } from '@angular/common/http';
import { Talent } from './talents.model';

@Component({
  selector: 'app-nos-talents',
  standalone: true,
  imports: [TalentsItemComponent],
  templateUrl: './nos-talents.component.html',
  styleUrl: './nos-talents.component.scss'
})
export class NosTalentsComponent implements OnInit {
  public talents: Talent[] = [];

  private talentsUrl = 'assets/talents.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTalents();
  }

  private loadTalents(): void {
    this.http.get<Talent[]>(this.talentsUrl)
      .subscribe(
        (data: Talent[]) => {
          this.talents = data;
        },
        (error: any) => {
          console.error('Error loading talents:', error);
        }
      );
  }
}
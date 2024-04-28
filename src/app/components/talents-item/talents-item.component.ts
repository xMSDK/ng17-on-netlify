import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-talents-item',
  standalone: true,
  imports: [],
  templateUrl: './talents-item.component.html',
  styleUrl: './talents-item.component.scss'
})
export class TalentsItemComponent {
  @Input({required: true})
  imageUrl: string = '';

  @Input({required: true})
  altText: string = '';

  @Input({required: true})
  tiktok: string = '';

  @Input({required: true})
  instagram: string = '';

  @Input({required: true})
  name: string = '';
}

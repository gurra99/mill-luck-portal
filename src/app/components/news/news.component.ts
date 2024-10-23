import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  shouldShowBlueWave: boolean = false;

  toggleBlueWaveVisibility() {
    this.shouldShowBlueWave = !this.shouldShowBlueWave;
  }
}

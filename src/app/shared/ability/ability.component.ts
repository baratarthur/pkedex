import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ability } from '@model/Pokemon';

@Component({
  selector: 'app-ability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent {
  @Input() ability: Ability | undefined;
}

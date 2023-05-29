import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Type } from '@model/Pokemon';

/*
  all types includes: Normal, Fire, Water,
  Grass, Flying, Fighting, Poison, Electric,
  Ground, Rock, Psychic, Ice, Bug, Ghost,
  Steel, Dragon, Dark and Fairy.
*/

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  @Input() type: Type | undefined;
  
  colorVar: string = 'normal';

  ngOnInit(): void {
    this.choseColorBasedOnType();
  }

  choseColorBasedOnType(): void {
    this.colorVar = this.type?.type.name?? 'normal';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() name: string = '';
  @Input() value: number = 0;

  backgroundColor: string | undefined;

  ngOnInit(): void { 
    this.backgroundColor = `--${this.name}`;
  }
}

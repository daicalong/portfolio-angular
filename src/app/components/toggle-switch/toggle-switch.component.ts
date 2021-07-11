import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() labelText?: string;
  @Input() icon?: string;
  @Input() on?: boolean;
  @Input() disabled?: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.disabled) return;
    this.on = !this.on;
    this.toggled.emit(this.on);
  }

}

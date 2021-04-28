import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {
  @Input() liked = true;
  @Input() counter = 0;
  @Output() like = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  heartClicked(): void {
    this.liked = !this.liked;
    this.counter += this.liked ? 1 : -1;
    this.like.emit('Useer toggle heart');
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../video.model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  isShy = {
    title: false,
    category: false,
    meta: false,
    comments: false,
    watchLater: false,
    cinemaMode: false
  };

  @Input() displayStyle: string;
  @Input() video: Video;

  constructor() {
  }

  ngOnInit() {
  }

  shyAllExcept(value: string) {
    for (const key in this.isShy) {
      if (this.isShy.hasOwnProperty(key)) {
        this.isShy[key] = true;
      }
    }
    this.isShy[value] = false;
  }

  shyNone() {
    for (const key in this.isShy) {
      if (this.isShy.hasOwnProperty(key)) {
        this.isShy[key] = false;
      }
    }
  }

}

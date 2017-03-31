import { Component, OnInit } from '@angular/core';
import { Video } from '../video-list/video.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  videoPlaylist: Video[];
  featuredVideo: Video;

  constructor() { }

  ngOnInit() {
    this.videoPlaylist = [
      new Video(
        'Amazing stories from around the globe',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog015-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog009-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      ),
      new Video(
        'Beautiful airports and subway stations',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      ),
      new Video(
        'The best surfing moments of 2015',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog012-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      ),
      new Video(
        'Beautiful airports and subway stations – Part 1',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog013-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      ),
      new Video(
        'Beautiful airports and subway stations – Part 1',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog004-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      ),
      new Video(
        'Beautiful airports and subway stations – Part 1',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog011-1500x500.jpg',
        'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog007-344x193.jpg',
        'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
        'Camila Hoffman',
        'Travel',
        'thursday, Mar 30, 2017',
        true
      )
    ],
    this.featuredVideo = new Video(
      'These 7 things will change the way you approach travel',
      'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog015-1500x500.jpg',
      'http://demo.mekshq.com/vlog/wp-content/uploads/2016/04/vlog007-344x193.jpg',
      'https://www.youtube.com/embed/l0Rj2Up-lx8?feature=oembed&autoplay=1',
      'Camila Hoffman',
      'Travel',
      'thursday, Mar 30, 2017',
      true
    );
  }

}

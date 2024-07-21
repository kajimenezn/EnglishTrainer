/*import { Component } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrl: './level3.component.css'
})
export class Level3Component {

}*/


import { Component } from '@angular/core';

interface ColorfulAdjective {
  color: string;
  adjective: string;
  description: string;
  exampleSentence: string;
}

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component {

  colorfulAdjectives: ColorfulAdjective[] = [
    {
      color: 'red',
      adjective: 'vibrant',
      description: 'Exciting and full of energy.',
      exampleSentence: "The city's vibrant nightlife attracts tourists from around the world."
    },
    {
      color: 'blue',
      adjective: 'calm',
      description: 'Peaceful and soothing.',
      exampleSentence: 'Sitting by the lake on a calm blue evening is truly relaxing.'
    },
    {
      color: 'green',
      adjective: 'refreshing',
      description: 'Reviving and invigorating.',
      exampleSentence: 'A refreshing green salad is perfect for a hot summer day.'
    },
    {
      color: 'yellow',
      adjective: 'cheerful',
      description: 'Happy and optimistic.',
      exampleSentence: "Her cheerful personality brightened everyone's day."
    },
    {
      color: 'purple',
      adjective: 'majestic',
      description: 'Grand and impressively beautiful.',
      exampleSentence: 'The castle stood on the hill, a majestic sight against the evening sky.'
    },
    {
      color: 'orange',
      adjective: 'energetic',
      description: 'Lively and enthusiastic.',
      exampleSentence: 'The energetic dance performance left the audience cheering.'
    }
  ];

  constructor() { }

}

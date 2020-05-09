import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAS_wGbf-45YHkE-hg1czYN0uZJq02hzzo",
      authDomain: "movies-5972b.firebaseapp.com",
      databaseURL: "https://movies-5972b.firebaseio.com",
      projectId: "movies-5972b",
      storageBucket: "movies-5972b.appspot.com",
      messagingSenderId: "821459378621",
      appId: "1:821459378621:web:d93e3e43d959e93744f2d4",
      measurementId: "G-KX8Q00SZ2M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

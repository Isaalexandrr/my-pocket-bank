import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Hub } from "./pages/hub/hub";


@Component({
  selector: 'app-root',
  imports: [Hub],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('my-pocket-bank');

}
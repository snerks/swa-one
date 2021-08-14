import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'swa-one';
  greeting?: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const headers = new HttpHeaders().set(
      'Accept',
      'text/plain; charset=utf-8'
    );

    const response$: Observable<string> = this.http.get(
      '/api/Greetings?name=Bob',
      {
        headers,
        responseType: 'text',
      }
    );

    response$.subscribe(
      (data) => (this.greeting = data),
      (error) => console.error(error)
    );
  }
}

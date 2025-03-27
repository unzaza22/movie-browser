import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  queryTerm: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  submitHandler(evt) {
    evt.preventDefault();
    this.router.navigate(['/movies'], { queryParams: {q: this.queryTerm} });
  }

}

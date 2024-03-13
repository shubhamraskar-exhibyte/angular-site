import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule,MatIconModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
})
export class FoodDetailsComponent {
  httpClient = inject(HttpClient);
  apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  data: any = {};
  recipe: any = {};
  recipeId: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
    });
    this.httpClient.get(this.apiUrl).subscribe((data: any) => {
      this.data = data.meals;
      this.recipe = this.data.filter((o: any) => o.idMeal === this.recipeId)[0];
    });
  }

  back() {
    history.back();
  }
}

import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FoodCardComponent } from '../food-card/food-card.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    FoodCardComponent,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  value = '';
  httpClient = inject(HttpClient);
  apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  data: any = {};
  filterData = [];

  constructor(private dataService: CommonService) {}

  ngOnInit(): void {
    this.httpClient.get(this.apiUrl).subscribe((data: any) => {
      this.data = data.meals;
      this.filterData = Object.assign([], this.data); // Create a copy of the array
      this.dataService.sendData(this.filterData);
    });
  }

  searchRecipe() {
    if (this.value) {
      this.filterData = this.data.filter((o: any) =>
        o.strMeal.toLowerCase().includes(this.value.toLowerCase())
      );
    } else {
      this.filterData = Object.assign([], this.data); // Create a copy of the array
    }
    this.dataService.sendData(this.filterData);
  }

  clear() {
    this.value = '';
    this.filterData = Object.assign([], this.data); // Create a copy of the array
    this.dataService.sendData(this.filterData);
  }
}

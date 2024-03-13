import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../common/common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss',
})
export class FoodCardComponent {
  receivedData: Observable<any>;
  constructor(private dataService: CommonService, private router: Router) {
    this.receivedData = this.dataService.getData();
  }

  goToDetails(item: any) {
    this.router.navigate(['/details', item.idMeal]);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PizzaData } from '../../models/pizza.model';


@Component({
  selector: 'app-new-pizza-adding',
  templateUrl: './new-pizza-adding.component.html',
  styleUrls: ['./new-pizza-adding.component.scss']
})
export class NewPizzaAddingComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {

  }

  // Автоматичне отримання наших даних з БД, прикожному завантаженні сайту...
  ngOnInit() {
    this.fetchPosts()
  }

  // Створеея методу з коробкою даних і їх типом які ми відправляємо,
  // Лінк з Рілтайм бази даних Файрбейсу, щоб завантажити туди дані через метод ПОСТ,
  // Обовязкова підписка в ангулярі, щоб пост був реалізований...
  onCreatePizza(postData: PizzaData) {
    this.http.post(
      'https://pizza-ltia-default-rtdb.firebaseio.com/pizzas.json', 
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }


  onFetchPosts() {

  }

  
  onClearPosts() {
    // Send Http request
  }

  // Метод для отримання даних з БД, по посиланню з якого ми їх витягуємо
  private fetchPosts() {
    this.http
      .get('https://pizza-ltia-default-rtdb.firebaseio.com/pizzas.json')
      .pipe(
        map((responseData: any) => {
          const pizzasArray: PizzaData[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              pizzasArray.push({ ...responseData[key], id: key });
            }
          }
          return pizzasArray;
        })
      )
      .subscribe(
        pizzas => {
          // ...
          console.log(pizzas);
        }
      );
  }
  
}

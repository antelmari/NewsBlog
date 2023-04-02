import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsapiService } from '../../service/newsapi.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  constructor(private _services:NewsapiService) {}

  p: number = 1;
  topHeadlinesData: any = [];
  country: string = 'country=us';
  category: string = '';
  inputCountry: string = 'Соединенные Штаты';
  inputCategory: string = 'Без категории';
  countries = [
    {id: "au", value: "Австралия", selected: false},
    {id: "at", value: "Австрия", selected: false},
    {id: "ar", value: "Аргентина", selected: false},
    {id: "be", value: "Бельгия", selected: false},
    {id: "bg", value: "Болгария", selected: false},
    {id: "br", value: "Бразилия", selected: false},
    {id: "gb", value: "Великобритания", selected: false},
    {id: "hu", value: "Венгрия", selected: false},
    {id: "ve", value: "Венесуэла", selected: false},
    {id: "de", value: "Германия", selected: false},
    {id: "hk", value: "Гонконг", selected: false},
    {id: "gr", value: "Греция", selected: false},
    {id: "eg", value: "Египет", selected: false},
    {id: "il", value: "Израиль", selected: false},
    {id: "in", value: "Индия", selected: false},
    {id: "id", value: "Индонезия", selected: false},
    {id: "ie", value: "Ирландия", selected: false},
    {id: "it", value: "Италия", selected: false},
    {id: "ca", value: "Канада", selected: false},
    {id: "cn", value: "Китай", selected: false},
    {id: "co", value: "Колумбия", selected: false},
    {id: "kr", value: "Корея", selected: false},
    {id: "cu", value: "Куба", selected: false},
    {id: "lv", value: "Латвия", selected: false},
    {id: "lt", value: "Литва", selected: false},
    {id: "my", value: "Малайзия", selected: false},
    {id: "ma", value: "Марокко", selected: false},
    {id: "mx", value: "Мексика", selected: false},
    {id: "ng", value: "Нигерия", selected: false},
    {id: "nl", value: "Нидерланды", selected: false},
    {id: "nz", value: "Новая Зеландия", selected: false},
    {id: "no", value: "Норвегия", selected: false},
    {id: "ae", value: "ОАЭ", selected: false},
    {id: "pl", value: "Польша", selected: false},
    {id: "pt", value: "Португалия", selected: false},
    {id: "ru", value: "Россия", selected: false},
    {id: "ro", value: "Румыния", selected: false},
    {id: "sa", value: "Саудовская Аравия", selected: false},
    {id: "rs", value: "Сербия", selected: false},
    {id: "sg", value: "Сингапур", selected: false},
    {id: "sk", value: "Словакия", selected: false},
    {id: "si", value: "Словения", selected: false},
    {id: "us", value: "Соединенные Штаты", selected: true},
    {id: "th", value: "Таиланд", selected: false},
    {id: "tw", value: "Тайвань", selected: false},
    {id: "tr", value: "Турция", selected: false},
    {id: "ua", value: "Украина", selected: false},
    {id: "fr", value: "Франция", selected: false},
    {id: "ph", value: "Филиппины", selected: false},
    {id: "cz", value: "Чехия", selected: false},
    {id: "ch", value: "Швейцария", selected: false},
    {id: "se", value: "Швеция", selected: false},
    {id: "za", value: "Южная Африка", selected: false},
    {id: "jp", value: "Япония", selected: false}
  ];
  categories = [
    {id: "none", value: "Без категории", selected: true},
    {id: "business", value: "Бизнес", selected: false},
    {id: "entertainment", value: "Развлечения", selected: false},
    {id: "general", value: "Общее", selected: false},
    {id: "health", value: "Здоровье", selected: false},
    {id: "science", value: "Наука", selected: false},
    {id: "sports", value: "Спорт", selected: false},
    {id: "technology", value: "Технологии", selected: false}
  ];

  getCountryID(id: string) {
    this.country = "country=" + id;
    this.ngOnInit();
  }

  getCategoryID(id: string) {
    if (id == "none") {
      this.category = "";
    } else {
      this.category = "&category=" + id;
    }
    this.ngOnInit();
  }

  clickOnCountry(index: number) {
    const event: Event = new Event("click");
    const countryOptions: NodeListOf<Element> = document.querySelectorAll('.countryOption');
    const countriesList: Element | null = document.querySelector('.countriesList');
    countryOptions[index].dispatchEvent(event);
    this.countries.forEach(item => {
      item.selected = false;
    });
    this.countries[index].selected = true;
    this.inputCountry = this.countries[index].value;
    countriesList?.classList.remove('selects-list--active');
  };

  clickOnCategory(index: number) {
    const event: Event = new Event("click");
    const categoryOptions: NodeListOf<Element> = document.querySelectorAll('.categoryOption');
    const categoriesList: Element | null = document.querySelector('.categoriesList');
    categoryOptions[index].dispatchEvent(event);
    this.categories.forEach(item => {
      item.selected = false;
    });
    this.categories[index].selected = true;
    this.inputCategory = this.categories[index].value;
    categoriesList?.classList.remove('selects-list--active');
  }

  countriesList() {
    const countriesList: Element | null = document.querySelector('.countriesList');
    countriesList?.classList.toggle('selects-list--active');
  }

  categoriesList() {
    const categoriesList: Element | null = document.querySelector('.categoriesList');
    categoriesList?.classList.toggle('selects-list--active');
  }

  ngOnInit(): void {

    this._services.topHeadlines(this.country, this.category).subscribe(
      (data) => (this.topHeadlinesData = data.articles),
      (error) => {
        alert(error.message);
      }
    );
  }
}

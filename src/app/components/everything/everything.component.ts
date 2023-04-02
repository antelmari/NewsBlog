import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../service/newsapi.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {

  constructor(private _services:NewsapiService) {}

  p: number = 1;
  everythingData: any = [];
  keyword: string = 'weather';

  newKeyword(word: string) {
    this.keyword = word;
  }
  
  newsSearch() {
    if (this.keyword.length == 0) {
      alert('Введите ключевое слово для поиска!');
    } else {
      this.ngOnInit();
    }
  }

  ngOnInit(): void {

    this._services.everything(this.keyword).subscribe(
      (data) => (this.everythingData = data.articles),
      (error) => {
        alert(error.message);
      }
    );
  }
}

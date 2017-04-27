import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Cake","This is not a lie","http://i3.kym-cdn.com/entries/icons/facebook/000/001/707/cake-a-lie.jpg"),
    new Recipe("Pudim","É um pudim vigâ","https://retornosms.com.br/receitas/wp-content/uploads/2017/02/pudim-leite-em-po-liquidificador-259x168.jpg"),
    new Recipe("Test","Test","http://assets.servedby-buysellads.com/p/manage/asset/id/37972")
  ];

  

  constructor() {
  }

  ngOnInit() {
  }

}

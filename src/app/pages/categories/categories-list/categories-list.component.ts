import { Component, OnInit } from '@angular/core';

import { Category } from "../shared/categories.module";
import { CategoriesService } from "../shared/categories.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.categoriesService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert("Erro ao carregar a lista")
           )
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja Realmente excluir este item?')

    if(mustDelete){ 
    this.categoriesService.delete(category.id).subscribe(
      () => this.categories = this.categories.filter(element => element != category),
      () => alert("Erro ao tentar excluir!")
    )
  }
}

}

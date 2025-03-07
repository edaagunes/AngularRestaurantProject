import { Component } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { CategoryModel } from '../../_models/category';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

constructor(private categoryService: CategoryService) {
this.getCategories();
}

categoryList: CategoryModel[];
category:CategoryModel = new CategoryModel();
editCategory:any={};

getCategories()
{
  this.categoryService.getCategories().subscribe({
    next: values => this.categoryList = values,
    error: error => console.log(error)
  });
}

create()
{
  this.categoryService.create(this.category).subscribe({
    next: value => this.categoryList.push(value),
    error: error => console.log(error)
  })
}

onSelected(category:CategoryModel)
{
  this.editCategory=category;
}

update()
{
  this.categoryService.update(this.editCategory.id,this.editCategory).subscribe({
    error: error => console.log(error)
  })
}

delete(id)
{
  this.categoryService.delete(id).subscribe({
    error:error => console.log(error),
    complete:()=>this.getCategories()
  })
}

}

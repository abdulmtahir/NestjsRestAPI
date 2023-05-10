import { SetMetadata } from "@nestjs/common";
import { Category } from "../enums/category.enum";

export const CATEGORY_KEY = 'categories';
export const Categories = (...categories: Category[]) => SetMetadata(CATEGORY_KEY, categories);
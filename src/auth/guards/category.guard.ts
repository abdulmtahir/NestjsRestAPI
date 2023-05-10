import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Categories, CATEGORY_KEY } from "../decorators/category.decorators";
import { Category } from "../enums/category.enum";

@Injectable()
export class CategGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredCategories = this.reflector.getAllAndOverride<Category[]>(CATEGORY_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredCategories) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredCategories.some((role) => user.categories?.includes(role));
  }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductslistcategoryComponent } from './productslistcategory.component';

describe('ProductslistcategoryComponent', () => {
  let component: ProductslistcategoryComponent;
  let fixture: ComponentFixture<ProductslistcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductslistcategoryComponent]
    });
    fixture = TestBed.createComponent(ProductslistcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

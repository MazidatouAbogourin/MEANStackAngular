import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { debounce, debounceTime, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, AfterViewInit{
   products: any=[];
   searchItem: any;
   @ViewChild('searchItem') searchInput!: ElementRef;
  constructor(private productService: ProductService){

  }
  ngAfterViewInit(): void {
   
   fromEvent(this.searchInput.nativeElement, 'input').pipe(
    map((event: any)=> (<HTMLInputElement> event.target).value),
      debounceTime(1000)
    ).subscribe(data=> {console.log(data);
     this.products= this.products.filter((product: any)=> product.title.includes(data))
    }
     )
  }

 
 

  ngOnInit(): void {
    this.productService.getData().subscribe((res: any)=>{

      this.products= res['products'];
      console.log(this.products)
     

    });
  }

}

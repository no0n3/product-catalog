import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modalSubject$: Subject<Product> = new Subject()

  constructor() { }

  open(product: Product) {
    this.modalSubject$.next(product)
  }
}

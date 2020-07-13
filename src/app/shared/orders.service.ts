import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}

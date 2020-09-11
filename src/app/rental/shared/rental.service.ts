import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService
{
	private rentals: Rental[] = [
{
id:"1",
title:"Tara Appartment",
city:"New Delhi",
category:"Appartment",
image:"https://picsum.photos/200/150/?random",
description:"Tara Appartment Delhi",
createdAt:"12/03/2020"
},
{
id:"2",
title:"Zakir Appartment",
city:"New Delhi",
category:"Appartment",
image:"https://picsum.photos/200/150/?random",
description:"Zakir Appartment Delhi",
createdAt:"18/03/2020"
},
{
id:"3",
title:"Salman Appartment",
city:"New Delhi",
category:"Appartment",
image:"https://picsum.photos/200/150/?random",
description:"Salman Appartment Delhi",
createdAt:"06/03/2020"
},
{
id:"4",
title:"Amir Appartment",
city:"New Delhi",
category:"Appartment",
image:"https://picsum.photos/200/150/?random",
description:"Amir Appartment Delhi",
createdAt:"06/03/2020"
}
];




public getRentalById(rentalId: string): Observable<Rental>
{
	return new Observable<Rental>((observer) => {

	setTimeout(() => {
	const foundRental=this.rentals.find((rental) => {
	return rental.id = rentalId;
	});
	observer.next(foundRental);

	},500);
	
	});
}





public getRentals(): Observable<Rental[]>
{
	const rentalObservable: Observable<Rental[]> = new Observable((observer)=>{
	setTimeout(()=>{
	debugger;
	observer.next(this.rentals);
	},1000);

	setTimeout(()=>{
	debugger;
	observer.error("Im error");
	},2000);

	setTimeout(()=>{
	debugger;
	observer.complete();
	},3000);

	});
	return rentalObservable;
}




}
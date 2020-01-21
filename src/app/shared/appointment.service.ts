import { Injectable } from '@angular/core';
import {Appointment} from './Apointment';
import {AngularFireDatabase, AngularFireList ,AngularFireObject, AngularFireDatabaseModule} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  //create
createBooking(apt:Appointment){
  return this.bookingListRef.push({
    name:apt.name,
    email:apt.email,
    mobile:apt.mobile

  });
}

//obtener un elemento
getBooking(id:string){
  this.bookingRef=this.db.object('/appointment/'+id);
  return this.bookingListRef;
}

//actualizar
updateBooking(id,apt:Appointment){
  return this.bookingRef.update({
    name:apt.name,
    email:apt.email,
    mobile:apt.mobile
  }
  );
}

deleteBooking(id:string){
  this.bookingRef=this.db.object('/appointment/'+id);
  this.bookingRef.remove();
}

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../config/API'; // ReactiveX for JavaScript

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  serviceURL = API.serviceBaseURL + '/vehicles';

  constructor(public http: HttpClient) {
  }

  getAllVehicles(): Observable<Array<Vehicle>> {
    return this.http.get <Array<Vehicle>>(this.serviceURL, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // $.ajax( {
    //   url : this.serviceURL,
    //   data: {},
    //   method: 'GET'
    // })
  }

}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: any;
  authData: any = {
    name: String,
    email: String,
    password: String,
    vehicleType: String,
    phone: String,
    company: String,
    model: String,
    registrationNumber: String,
    whatsApp: Number,
    startDate: Date,
    txnId: String

  }
  
  get Window() {
    return window;
  }
  user: any;
  id: string;
  Userlogin: boolean;
  private tokenTimer: any;
  timer: any;
  honda = ['Brio', 'Jazz', 'Amaze', 'City', 'Civic', 'CRV', 'Accord', 'Mobilio', 'Airwave', 'Odyssey', 'BRV', 'WRV'];

  hyundai = ['Eon', 'Santro', 'I10', 'I20', 'Getz', 'Accent', 'Verna', 'Elantra', 
  'Sonata', 'Creta', 'I45', 'Xcent', 'Terracan', 'Tucson', 'venue'];

  suzuki = ['800', '1000', 'Alto', 'Alto 800', 'Wagon R', 'Alto k10', 'Zen', 
  'Versa', 'Astar', 'Ritz', 'Swift', 'Swift Dzire', 'SX4', 'Omni', 'Eeco', 'Esteem',
  'Gypsy', 'Ertiga', 'Baleno', 'Celerio', 'Ciaz', 'Scross', 'Vitara Brezza', 'Ignis', 'Swift Dzire Tour', 'Kizashi', 'Dzire'];
  
  tata = ['Nano', 'Indica', 'Indica Vista', 'Indigo', 'Manza', 'Indigo ECS', 'Sumo', 'Venture', 'Safari', 
  'Aria', 'Xenon', 'Zest', 'Bolt', 'Eicher', 'Tiago', 'Tigor', 'Nexon', 'Hexa', 'Winger'];

  jeep = ['Compass'];

  mazda = ['Mazda5', 'Mazda8', 'Mazda3', 'Cx5', 'Mazda6'];

  chevrolet = ['Spark', 'Beat', 'Aveo', 'Sail', 'Cruze', 'Tavera Neo 3', 'Captiva', 'Enjoy', 'SRV'];

  nissan = ['Micra', 'Sunny', 'Evalia', 'Terrano', 'Qashqai', 'Elgrand', 'Sylphy', 'Tiana', 'Presage', 'Xtrail'];

  volkswagen = ['Polo', 'Cross Polo', 'Vento', 'Jetta', 'Passat', 'Tiguan', 'Golf', 'Ameo'];

  renault = ['Pulse', 'Duster', 'Scala', 'Fluence', 'Koleos', 'Kwid', 'Lodgy'];

  mahindra = ['Major', 'Bolero', 'Scorpio', 'Xylo', 'Quanto', 'Verito', 'Genio', 'XUV500', 'E20', 'Logan', 
  'Thar', 'Tuv300', 'Jeep', 'KUV100','Jeeto', 'Rexton', 'Marazzo', 'Nuvosports', 'XUV300'];

  bmw = ['1 Series', '3 Series', '3 Series GT', '7 Series', 'X1', 'X3', 'X5', 'Q5 TFSI', '520D'];

  jaguar = ['XJ', 'XF'];

  mini = ['cooper'];
  
  mercedes = ['C-Class', 'GM', 'S-Class', 'E-Class', 'M-Class' ];

  kia = ['Seltos'];

  mitsubishi = ['Lancer', 'Lancer Cedia', 'Pajero Sport', 'Outlander', 'Grandis', 'Attrage', 'Isuzu', 'Montero'];

  landrover = ['FreeLander', 'Vogue', 'Range Rover Evoque', 'Discovery', 'Range Rover Sport'];

  skoda = ['Fabia', 'Laura', 'Yeti', 'Superb', 'Rapid', 'Octavia'];

  ford = ['Figo', 'Fiesta', 'Ecosport', 'Endeavour', 'Ikon', 'Fusion', 'Focus',
  'Escort', 'Aspire', 'Freestyle', 'Mustang', 'Mondeo', 'Figo Trend'];

  rollsroyce = ['Phantom', 'Ghost', 'Cullinan', 'Dawn', 'Wrath', 'Drophead'];

  audi = ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'A5', 'R8'];

  fiat = ['Punto Evo', 'Linea', 'Avventura', 'Palio', 'Sienna', 'Adventure', 'Petra', 'Grande Punto'];

  lexsus = ['ES'];

  hero = ['Splendor', 'HF Deluxe', 'Glamor', 'Passion', 'XPulse', 'Xtreme', 'Achiever' ];

  royalenfield = ['Classic', 'Bullet', 'Interceptor', 'Himalayan', 'Continental', 'Thunderbird'];

  bajaj = ['Pulsar', 'Dominar', 'Platina', 'CT 100', 'Avenger', 'V15', 'Discover' ];

  hondaBike = ['CB Shine', 'CB Unicorn', 'XBlade', 'CBR', 'Livo', 'SP 125', 'Dream Yuga', 'CB300R', 'Dream Neo'];

  ktm = ['200 duke', '125 duke', 'RC 200', '390 Duke', 'RC 390', 'RC 125', '250 Duke', '790 Duke'];

  tvs = ['Apache', 'Sport', 'Radeon', 'Star City', 'Victor', ];

  suzukiBike = ['Hayabusa', 'Gixxer', 'Intruder', 'V-Strom', 'GSX'];

  kawasaki = ['Ninja', 'Vulcan', 'Versys', 'Z900RS'];

  yamaha = ['YZF R1', 'YZF R3', 'YZF R15', 'FZS', 'MT', 'SZ-RR', 'FZ-25', 'Fazer', 'MT 09', 'Saluto'];


  currentSelected: any;
  
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getauthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  
  createUser(name,  email, password, vehicleType, phone, company, registrationNumber, whatsApp, startDate, txnId): Promise<any> {
   const user: any = {
    name, email, password, vehicleType, phone, company, registrationNumber, whatsApp, startDate, txnId
   };
   
    return Promise.resolve((() => {
      // code here
      this.http.post('http://localhost:3000/api/auth/signup', user)
.subscribe(response => {
        console.log(response);
    });
      return 'from first'; // return whatever you want not neccessory
  })());
}

login(email: string, password: string): Promise<any> {

  return Promise.resolve((() => {
    // code here
    const authData = {email, password};
    this.http.post<{token: string; expiresIn: number}>('http://localhost:3000/api/auth/login', authData)
    .subscribe(response => {
      console.log(response);

      const token = response.token;
      this.token = token;
      console.log(this.token);
      this.authStatusListener.next(true);
      this.user = helper.decodeToken(token);
      this.saveAuthData(token, this.user.exp);

      this.id = this.user.userId;
      console.log(this.user);
      console.log(this.id);

    });
    return 'from second'; // return whatever you want not neccessory
})());
}


private saveAuthData(token: string, expiration: string ) {
  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expiration);

}

}

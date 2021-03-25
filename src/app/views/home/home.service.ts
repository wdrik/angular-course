import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface ICoin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

interface IResponse {
  data: ICoin[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'https://api.coincap.io/v2/assets';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  read(): Observable<IResponse> {
    return this.http.get<IResponse>(this.baseUrl)
  }
}












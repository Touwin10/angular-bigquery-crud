import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const QUERY_URL: string = `YOUR_CLOUD_FUNCTIONS_URL`;

@Injectable({
  providedIn: 'root'
})
export class BigqueryService {

  constructor(private http: HttpClient) { }

  onQuery(datasetName: string, q: string) {
    const postParams = {
      datasetName: datasetName,
      query: q
    };
    return this.http.post(QUERY_URL, postParams);
  }

}

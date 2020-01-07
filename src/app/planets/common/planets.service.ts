import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  async getAll(): Promise<string[]> {
    const planets = await this.httpClient
      .get<string[]>('/assets/planets.json')
      .toPromise();
    return planets;
  }

  constructor(private httpClient: HttpClient) {
  }
}

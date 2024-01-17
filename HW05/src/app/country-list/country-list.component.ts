import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from './country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent  implements OnInit {
  countries: Country[] = [];
  selectedCountry: Country | undefined;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      (response: Country[]) => {
        this.countries = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelectCountry(event: Event) {
    const target = event.target as HTMLSelectElement;
    const countryName = target.value;
    this.selectedCountry = this.countries.find(country => country.name.common === countryName);
  }
}

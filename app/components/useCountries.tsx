"use client"

import { useState, useEffect } from 'react';

// Define a type for the country data
type CountryData = {
    name: { common: string };
    flags: { png: string };
    population: number;
    region: string;
    capital: string;
    altSpellings: string;
};

// Define a type for the simplified country data
type SimplifiedCountry = {
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: string;
    altImg: string;
};

// Define the useCountries hook with generic types
export default function useCountries() {
    const [countries, setCountries] = useState<SimplifiedCountry[]>([]);

    useEffect(() => {
        // First: Fetch data from API
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((data: CountryData[]) => {
                // Update state with selected data
                const selectedData = data.map((country: CountryData) => ({
                    name: country.name.common,
                    flag: country.flags.png,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    altImg: country.altSpellings
                }));
                setCountries(selectedData);
                // console.log(data)
                // console.log(selectedData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Third: Dependency array, empty to run only once on component mount
    // console.log(countries)
    return countries;
}

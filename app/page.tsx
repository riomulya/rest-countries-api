"use client"

import Link from "next/link";
import Card from "./components/card";
import useCountries from "./components/useCountries";

export default function Home() {
  const countries = useCountries();
  console.log(countries);

  return (
    <main>
      <div className="grid grid-cols-5 gap-1">
        {countries.map((country, index) => (
          <Link href={country.name} key={index}>
            <Card
              imgSrc={country.flag}
              countries={country.name}
              population={country.population.toString()}
              region={country.region} // asumsi ini adalah nama agama dari regionalBlocs
              capital={country.capital}
              altImg={country.name} // asumsi ini adalah altSpellings yang pertama
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

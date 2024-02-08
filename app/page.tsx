import Link from "next/link";
import Card from "./components/card";
import countries from "./data/data.json";

export default function Home() {
  console.log(countries);

  return (
    <main>
      <div className="grid grid-cols-5 gap-1">
        {countries.map((country, index) => (
          <Link href={country.name}>
            <Card
              key={index} // pastikan setiap elemen memiliki key yang unik
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

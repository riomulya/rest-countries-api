import Image from "next/image"

type cardCountriesProps = {
    imgSrc: string;
    countries: string;
    population: string;
    region: string;
    capital: string;
    altImg: string;
}


export default function Card({ imgSrc, population, region, capital, countries, altImg }: cardCountriesProps) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                <a href="#">
                    <Image className="rounded-t-lg" src={imgSrc} alt={altImg} width={400} height={400} priority />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{countries}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Population : {population}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Region : {region}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital : {capital}</p>
                </div>
            </div>
        </>
    )
}
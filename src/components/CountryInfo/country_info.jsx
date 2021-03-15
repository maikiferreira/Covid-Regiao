import React from 'react';
import { format } from 'date-fns';
import './country_info.css';

function CountryInfo(country) {
    if (!country?.country) return <p id="default">Selecione um país</p>
    return( 
        <div id="dados">
            <p>País: {country?.country?.Country || "Não identificado"}</p>
            <p>Código do país: {country?.country?.CountryCode || "Não identificado"}</p>
            <p>Slug: {country?.country.Slug || "Não identificado"}</p>
            <p>Novos confirmados: {country?.country.NewConfirmed || "Não identificado"}</p>
            <p>Total confirmados: {country?.country.TotalConfirmed || "Não identificado"}</p>
            <p>Novas mortes: {country?.country.NewDeaths || "Não identificado"}</p>
            <p>Total mortes: {country?.country.TotalDeaths || "Não identificado"}</p>
            <p>Novos recuperados: {country?.country.NewRecovered || "Não identificado"}</p>
            <p>Total recuperados: {country?.country.TotalRecovered || "Não identificado"}</p>
            <p>Data: {format(new Date(country?.country.Date), "dd/MM/yyyy HH:mm") || "Não identificado"}</p>
        </div>
    );
}

export default CountryInfo;
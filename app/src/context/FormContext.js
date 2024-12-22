import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({children}) => {

    const title = {
        0: 'Osaamisen tarve',
        1: 'Työpaikkailmoitus',
        2: 'Hakemuksen käsittely',
        3: 'Haastattelu',
        4: 'Sopimus',
        5: 'Perehdytys',
        6: 'Lopputuloste',
    }

    const [page, setPage] = useState(0)
    
    useEffect(() => {
        if (page < 0) {
            window.location.replace(window.location.origin);
        }
    }, [page])

    const [data, setData] = useState({
        osaaminen: "",
        tavoitteet: "",
        aikataulu: "",
        budjetti: "",
        yritys_sijainti: "",
        tyopaikka_sijainti: "",
        yritys_kuvaus: "",
        tyosopimus_tyyppi: "",
        tyoaika: "",
        tehtavanimike: "",
        tyonkuvaus: "",
        ilmj_nimi: "",
        ilmj_puhelin: "",
        ilmj_sahkoposti: "",
        julkaisuaika_alku: "",
        julkaisuaika_loppu: "",
        yhteyshenkilo_yhteystiedot: "",
        tavoitettavissa: "",
        vastausaika: "",
        kutsu_haastatteluun: "",
        vastaus_hylatyille: "",
        haastattelutyyppi: "",
        haastattelurunko: "",
        muistilista: [],
      })

      const handleDataChange = e => {
        const type = e.target.type
        const name = e.target.name
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
      }

    return (
        <FormContext.Provider value={{title, page, setPage, data, setData}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext
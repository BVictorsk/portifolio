import React from 'react'
import { useTranslation } from "react-i18next";
import './LngSwitcher.scss';


const lngOptions = [
    { 
        name: "En",
        value: "en",
    },
    { 
        name: "Pt-Br",
        value: "ptBr",
    },
]

export const LngSwitcher = () => {
    const { i18n } = useTranslation();
  return (
    <div className="language-switcher">
        {lngOptions.map(lngOption => (
            <button
            type="radio"
            className="LngSwitcher dropdown"
            key={lngOption.value}
            onClick={() => {
                i18n.changeLanguage(lngOption.value)
            }}>
                {lngOption.name}
            </button>
        ))}
    </div>
  )
}

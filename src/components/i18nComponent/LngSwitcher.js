import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import React from 'react'
import './LngSwitcher.scss';


const enLng = [
    { 
        name: "En",
        value: "en",
    }
]

const ptLng = [
    { 
        name: "Pt-Br",
        value: "ptBr",
    }
]


export const LngSwitcher = () => {
    const { i18n } = useTranslation();


  return (
    <div className="language-switcher">
        {enLng.map(enLng => (
            <button
            type="button"
            className="LngSwitcher"
            key={enLng.value}
            onClick={() => {
                i18n.changeLanguage(enLng.value)
            }}>
                {enLng.name}
            </button>
        ))}
        <p> | </p>
        {ptLng.map(ptLng => (
            <button
            type="button"
            className="LngSwitcher"
            key={ptLng.value}
            onClick={() => {
                i18n.changeLanguage(ptLng.value)
            }}>
                {ptLng.name}
            </button>
        ))}
        <FaGlobe />
    </div>
  )
}
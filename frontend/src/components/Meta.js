import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bienvenido a GuruShop',
  description: 'Especialistas en Fabricación, Distribución e Instalación de Equipos para Andenes de Carga',
  keywords: 'Comprometidos con la Calidad y el Cumplimiento',
}

export default Meta;

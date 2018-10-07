import React from 'react'

import logos from '../images/logos'

const BrandLinkLogoImg = ({ height, brand }) => (
  <img src={logos[brand]} className="brand-link-logo-img" style={{ height: height }} />
)

const BrandLink = ({ tagline, linkUrl, brand, brandName }) => (
  <a className="brand-link" target="_blank" href={linkUrl}>
    <div className="brand-link-tagline">{tagline}</div>
    <div className="brand-link-logo">
      <BrandLinkLogoImg brand={brand} height="30px"/> {brandName}
    </div>
  </a>
)

export default BrandLink

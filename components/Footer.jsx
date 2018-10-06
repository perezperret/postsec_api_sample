import React from 'react'

import logos from '../images/logos'

const BrandLogo = ({ width, brand }) => (
  <img src={logos[brand]} className="brand-logo" style={{ width: width }} />
)

const TechTag = ({ tagline, linkUrl, brand, brandName }) => (
  <a className="techtag" target="_blank" href={linkUrl}>
    <div className="tagline">{tagline}</div>
    <div className="brand">
      <BrandLogo brand={brand} width="30px"/> {brandName}
    </div>
  </a>
)

const API_TECH = [
  { tagline: 'Built with', linkUrl: 'https://luckyframework.org', brand: 'lucky', brandName: 'Lucky' },
  { tagline: 'Deployed on', linkUrl: 'https://heroku.com', brand: 'heroku', brandName: 'Heroku' },
  { tagline: 'View source on', linkUrl: 'https://github.com/perezperret/postsec_api', brand: 'github', brandName: 'GitHub' }
]

const SAMPLE_TECH = [
  { tagline: 'Built with', linkUrl: 'https://reactjs.org', brand: 'react', brandName: 'React' },
  { tagline: 'Deployed on', linkUrl: 'https://netlify.com', brand: 'netlify', brandName: 'Netlify' },
  { tagline: 'View source on', linkUrl: 'https://github.com/perezperret/postsec_api_sample', brand: 'github', brandName: 'GitHub' }
]

const Footer = () => (
  <div className="footer">
    <div className="row">
      <TechTag tagline="Built by" linkUrl="https://perezperret.com" brand="perezperret" brandName="perezperret" />
    </div>

    <h4 className="tech-title">API</h4>
    <div className="row">
      {API_TECH.map(tech => <div key={tech.brand} className="col"><TechTag {...tech}/></div>)}
    </div>

    <h4 className="tech-title">Sample</h4>
    <div className="row">
      {SAMPLE_TECH.map(tech => <div key={tech.brand} className="col"><TechTag {...tech}/></div>)}
    </div>
  </div>
)

export default Footer

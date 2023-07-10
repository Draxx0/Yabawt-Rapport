import { ReactElement } from 'react';
import Logo from '/Logo.png';
import Website from '/assets/icons/website.svg';
import Linkedin from '/assets/icons/linkedin.svg';
import Github from '/assets/icons/github.svg';
import Nest from '/assets/icons/nest.svg';
import Docker from '/assets/icons/docker.svg';
import React from '/assets/icons/react.svg';
import Postgres from '/assets/icons/postgres.svg';
import Arrow from '/assets/icons/arrow.svg';
import Cross from '/assets/icons/cross.svg';

type IconName =
  | "logo"
  | "website"
  | "linkedin"
  | "github"
  | "docker"
  | "nest"
  | "react"
  | "postgres"
  | "arrow"
  | "cross"

const Icon = ({ name, url, className }: { name: IconName; url?: string, className?: string }): ReactElement => {
  switch (name) {
    case 'logo':
      return <img src={Logo} alt="" className={`cursor-pointer ${className}`} />

    case 'website':
      return <a href={url} target="_blank">
        <img src={Website} alt="" className={`cursor-pointer ${className}`} />
      </a>


    case 'linkedin':
      return <a href={url} target="_blank">
        <img src={Linkedin} alt="" className={`cursor-pointer ${className}`} />
      </a>

    case 'github':
      return <a href={url} target="_blank">
        <img src={Github} alt="" className={`cursor-pointer ${className}`} />
      </a>

    case 'nest':
      return <img src={Nest} alt="" className={`cursor-pointer ${className}`} />

    case 'docker':
      return <img src={Docker} alt="" className={`cursor-pointer ${className}`} />

    case 'react':
      return <img src={React} alt="" className={`cursor-pointer ${className}`} />

    case 'postgres':
      return <img src={Postgres} alt="" className={`cursor-pointer ${className}`} />

    case 'arrow':
      return <svg width="26" height="26" viewBox="0 0 26 26" className={`cursor-pointer ${className}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
        <path d="M17.3442 11.9167H5.41668C4.82084 11.9167 4.33334 12.4042 4.33334 13C4.33334 13.5959 4.82084 14.0834 5.41668 14.0834H17.3442V16.0225C17.3442 16.51 17.9292 16.7484 18.265 16.4017L21.2767 13.3792C21.4825 13.1625 21.4825 12.8267 21.2767 12.61L18.265 9.58753C17.9292 9.24087 17.3442 9.49003 17.3442 9.9667V11.9167Z" fill="currentColor" />
      </svg>

    case 'cross':
      return <img src={Cross} alt="" className={`cursor-pointer ${className}`} />

    default:
      return <></>
  }
}

export default Icon
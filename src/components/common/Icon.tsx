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
import Webmarketer from '/assets/icons/webmarketer.svg';

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
  | "webmarketer"

const Icon = ({ name, url }: { name: IconName; url?: string }): ReactElement => {
  switch (name) {
    case 'logo':
      return <img src={Logo} alt="" className="cursor-pointer" />

    case 'website':
      return <a href={url} target="_blank">
        <img src={Website} alt="" className="cursor-pointer" />
      </a>


    case 'linkedin':
      return <a href={url} target="_blank">
        <img src={Linkedin} alt="" className="cursor-pointer" />
      </a>

    case 'github':
      return <a href={url} target="_blank">
        <img src={Github} alt="" className="cursor-pointer" />
      </a>

    case 'nest':
      return <img src={Nest} alt="" className="cursor-pointer" />

    case 'docker':
      return <img src={Docker} alt="" className="cursor-pointer" />

    case 'react':
      return <img src={React} alt="" className="cursor-pointer" />

    case 'postgres':
      return <img src={Postgres} alt="" className="cursor-pointer" />

    case 'arrow':
      return <img src={Arrow} alt="" className="cursor-pointer" />

    case 'webmarketer':
      return <img src={Webmarketer} alt="" className="cursor-pointer" />

    default:
      return <></>
  }
}

export default Icon
import React, {FC} from 'react';
import {useQuery} from '@apollo/client'
import { getSocialLinks } from '../../../qurries'


export const Links:FC = () => {

  const {data} = useQuery(getSocialLinks)
  const profiles =  data?.profiles.filter((p: any ) => p?.onSite)
  return (          
        <>
          {profiles?.map((l: any) => 
            <a className={`${l?.glitch ? 'glitch' : ''} p-1 text-xs`} href={l?.url}>   
              <div  data-text={`${l?.glitch ? l?.name : ''} `} className={`${l?.glitch ? 'glitch' : ''} `} > 
                {l?.name}
              </div>   
            </a>
          )}
        </>
  )
}


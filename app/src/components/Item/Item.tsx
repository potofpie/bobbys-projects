/* This example requires Tailwind CSS v2.0+ */
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { FC } from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';


interface ProjectItem {
  name: string;
  description: string;
  githubLink: string;
  startDate: Date;
  endDate: Date;
  url: string;
  demo: any;
}


interface ItemFlairProps {
  color : string;
  message : string;

   
}

const ItemContainer = styled.div.attrs(() => ({
  className: `transition duration-500 ease-in-out bg-white  max-w-md py-4 px-8 bg-white shadow-lg hover:shadow-2xl  rounded-lg my-5 lg:mx-5`
  }))``

const TitleSection = styled.div.attrs(() => ({
    className: `flex flex-1 text-gray-800 text-xl font-semibold flex-row`
    }))``
  

const LinksSection = styled.div.attrs(() => ({
  className: `flex justify-end mt-4`
  }))``


const LinkItem = styled.a.attrs(() => ({
  className: `text-sm font-medium text-indigo-400`
  }))``
  

const Description = styled.p.attrs(() => ({
  className: `text-sm text-gray-600`
  }))``


interface ItemProps {
  // setModal: Function;
  item: ProjectItem;
}


const BaseItemFlair: FC<ItemFlairProps> = ({color, message}) => {
  return (
    <div className='flex flex-1 p-2 justify-start items-center'>
        <Tooltip title={message}>
          <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg">
            <circle fill={color} cx="5" cy="5" r="5"/>
          </svg>
      </Tooltip>
    </div>
  )

}

const ItemFlair: FC<{type: string}> = ({type}) => {
  switch(type) {
    case 'active':
      return <BaseItemFlair color="#84de02" message={"Active!"} />
    default:
      return <div/>
  }

}

export const Item: FC<ItemProps> = ({item}) => {
  return (
    <ItemContainer>
      <div>
        {item?.demo?.url && <img alt={`demogif-${item.name}`}  src={item?.demo?.url}/>}
        <TitleSection>
          <div>{item.name} </div>
          {!item?.endDate && <ItemFlair type={'active'}/>}
        </TitleSection>
        <Description>{item.description}</Description>
      </div>
      <LinksSection >
        {item?.url && <LinkItem href={item?.url} >Live here! 👀 </LinkItem>}

        {item?.githubLink && <LinkItem href={item?.githubLink} >Github 👾 </LinkItem>}
      </LinksSection>
    </ItemContainer>
  )
}
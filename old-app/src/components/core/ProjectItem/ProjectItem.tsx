import { FC } from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';


interface ProjectItemArgs {
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
  className: `text-left transition duration-500 ease-in-out bg-white  w-96  h-30  py-4 px-8 bg-white shadow-lg hover:shadow-2xl  rounded-lg my-5 lg:mx-5   		`
  }))`
    min-width: 10rem;
  `

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
  className: `text-xs text-gray-600  `
  }))``


interface ProjectItemProps {
  item: ProjectItemArgs;
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

export const ProjectItem: FC<ProjectItemProps> = ({item}) => {
  return (
    <ItemContainer>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }}>
        {item?.demo?.url && <img style={{height: 200}} alt={`demogif-${item.name}`}  src={item?.demo?.url}/>}
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
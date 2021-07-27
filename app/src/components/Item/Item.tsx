/* This example requires Tailwind CSS v2.0+ */
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import React, {FC} from 'react';



interface ProjectItem {
  name: string;
  description: string;
  githubLink: string;
  url: string;
  demo: any;

}

interface ItemProps {
  // setModal: Function;
  item: ProjectItem;
}

export const Item: FC<ItemProps> = ({item}) => {
  return (
    <div className="transition duration-500 ease-in-out bg-white hover:bg-gray-100 max-w-md py-4 px-8 bg-white shadow-lg hover:shadow-2xl  rounded-lg my-5 lg:mx-5">
      <div>
        {item?.demo?.url && <img alt={'demogif'}  src={item?.demo?.url}/>}
        <h2 className="text-gray-800 text-xl font-semibold">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
      <div className="flex justify-end mt-4">
        {item?.url && <a href={item?.url} className="text-sm font-medium text-indigo-400">Live here! 👀 </a>}
        {item?.githubLink && <a href={item?.githubLink} className="text-sm font-medium text-indigo-400">Github 👾 </a>}
      </div>
    </div>
  )
}
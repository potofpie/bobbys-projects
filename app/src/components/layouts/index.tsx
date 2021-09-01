import styled from 'styled-components';


export const SectionContainer = styled.div.attrs(() => ({
    className: `
        flex 
        flex-row
        flex-1 
        custom-tan 
        text-black 
        text-center 
        items-center


        justify-around
    `
    }))``
  
export const HorizonalSectionItems = styled.div.attrs(() => ({
    className: `
    flex 
    flex-1 
    flex-col 
    justify-center
    md:flex-row
    items-center 

    `
}))``

export const HorizonalSectionItemsLeftSideImage = styled.div.attrs(() => ({
    className: `
    flex 
    flex-1 
    flex-col 
    justify-center
    md:flex-row
    items-center 

    `
}))``


export const HorizonalSectionItemsRightSideImage = styled.div.attrs(() => ({
    className: `
    flex 
    flex-1 
    flex-col-reverse	 

    justify-center
    md:flex-row
    items-center 

    `
}))``


export const SubSectionHorizontal = styled.div.attrs((divider) => ({
    className: `
        flex 
        flex-1 
        flex-row 
        justify-center
        items-center 
    `
}))``

export const UndrawImage = styled.img.attrs(() => ({
    className: `
    md:m-0
    md:max-h-96
    max-h-60
    m-10
    `
}))``


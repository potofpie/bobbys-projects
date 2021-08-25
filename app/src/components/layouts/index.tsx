import styled from 'styled-components';


export const SectionContainer = styled.div.attrs(() => ({
    className: `
        flex 
        flex-row
        flex-1 
        custom-tan 
        text-black 
        text-center 
        justify-around
    `
    }))``
  
export const HorizonalSectionItems = styled.div.attrs(() => ({
    className: `
    flex 
    flex-1 
    flex-row 
    justify-center
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
        max-h-96
    `
}))``


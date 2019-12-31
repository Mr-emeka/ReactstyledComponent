import React from 'react';
import styled from 'styled-components';

import {ReactComponent as Comments} from '../../comment.svg';
import {ReactComponent as Play} from '../../play.svg';
import {ReactComponent as Heart} from '../../heart.svg';
import img from '../../pexels-photo-2552129.jpeg';
const ImgContainer = styled.div`
position:relative;
flex-basis:100%;
flex-basis:calc(33.333% -20);
margin:10px;
cursor:pointer;
transition:0.5s all ease-in;
`;

const ImgIcons = styled.div`
display:flex;
align-items:center;
justify-content:center;
color:#ffffff;
margin-right:20px;

svg{
  margin-right:10px;
}
`;
const ImgMeta =styled.div`
display:none;
align-items:center;
justify-content:center;
position:absolute;
background-color:rgba(0,0,0,0.5);
top:0;
right:0;
bottom:0;
lef:0;
${ImgContainer}:hover&{
  display:flex !important;
}
`;
const Img = styled.img`
cursor:pointer;
width:100%;

`;

export const SingleImage = ({images})=>{
  return(
    <ImgContainer>
     <Img src={img} />
     <ImgMeta>
      <ImgIcons>
        {images.isVideo ? <Play /> : <Heart />}{images.likes}
      </ImgIcons>
      <ImgIcons>
      <Comments /> {images.comments}
     </ImgIcons>
     </ImgMeta>
    </ImgContainer>
  )
}
import * as React from 'react';
import { Image } from '../styles/theme';

export interface IImgRowProps {
    src: string
}

export default function Img (props: IImgRowProps) {
    return (
      <Image src={props.src}></Image>
  );
}

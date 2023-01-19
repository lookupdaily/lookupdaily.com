import Image from "next/image";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import styles from "./ImageItem.module.css";

export interface IImageItem {
  src: string;
  alt: string;
  id: string;
  orientation: string;
  dimensions: {
    width: number;
    height: number;
  }
}

interface Props {
  image: IImageItem;
}

export const ImageItem = ({image: {src, alt}}: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <Image src={src} layout="fill" alt={alt} className={styles.image}/>
      </div>
      <small className={utilStyles.lightText}>{alt}</small>
    </div>
  );
}
import { Box, styled, Theme } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import React ,{ CSSProperties, FC, useState } from "react";

import { ResponsiveContainer } from "../common-styled";
import { ResponsiveImage } from "../responsive-image";

export const PhotoViewer: FC = () =>{
    const { onClickNext, onClickPrev, currentImg } =  useChangeImage();
    const [viewFullSizeImage, setFullSizeImage] = useState<boolean>(false);
    const onClickFullSize = () =>{
        setFullSizeImage((prev) => !prev)
    }
    return(
        <>
            <PhotoViewerWrapper>
                <ResponsiveContainer sx={responsiveContainerExt}>
                    <ResponsiveImage src={galleryImageConfig[currentImg].imgUrl} customStyles={responsiveImageExt} onClick={onClickFullSize}/>
                </ResponsiveContainer>
                <PhotoViewerButton sx={{left:  0}}>
                    <ArrowBackIosIcon fontSize="large" sx={nextPrevButtonCommon} onClick={onClickPrev}/>
                </PhotoViewerButton>
                <PhotoViewerButton sx={{right:  0}}>
                    <ArrowForwardIosIcon fontSize="large" sx={nextPrevButtonCommon} onClick={onClickNext}/>
                </PhotoViewerButton>
            </PhotoViewerWrapper>
            {
                viewFullSizeImage && (
                    <FullImageViewerWrapper>
                        <ResponsiveImage src={galleryImageConfig[currentImg].imgUrl} />
                        <FullSizeImageCloseIcon onClick={onClickFullSize}/>
                    </FullImageViewerWrapper>
                )
            }
        </>
    )
}

export type UseChangeImage = () =>{
    onClickNext: () =>void;
    onClickPrev: () =>void;
    currentImg: number;
}

export const useChangeImage: UseChangeImage = () =>{
    const [currentImg, setCurrentImg] = useState<number>(0);
    const lastImageIndex = galleryImageConfig.length - 1;
    const onClickNext = () => {
        if(currentImg === lastImageIndex){
            setCurrentImg(0)
            return
        }
        setCurrentImg((current) => current + 1);
    }
    const onClickPrev = () => {
        if(currentImg === 0){
            setCurrentImg(lastImageIndex);
            return;
        }
        setCurrentImg((current) => current - 1)
    };

    return { onClickNext, onClickPrev, currentImg  }
}

export const PhotoViewerWrapper = styled(Box)(
    ({theme}) =>(
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 600,
            backgroundColor:  theme.palette.background.default,
            marginTop: 5,
            position: 'relative',
            borderRadius: theme.spacing(2)
        }
    )
);

export const FullSizeImageCloseIcon = styled(CloseIcon)(({theme}) =>(
    {
        position: 'absolute',
        top: 5,
        right: 5,
        cursor: 'pointer',
        color: theme.palette.background.default,
    }
))

export const FullImageViewerWrapper = styled(Box)(
    ({theme}) =>(
        {
            position: 'fixed',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3
        }
    )
)

export const responsiveContainerExt: CSSProperties = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
}

export const responsiveImageExt: CSSProperties = {
    height: 550, alignSelf: 'center', cursor: 'pointer'
}

export const nextPrevButtonCommon = (theme: Theme) =>({
    color: theme.palette.primary.main,
    cursor: 'pointer',
})

export const PhotoViewerButton = styled(Box)(
    ({theme}) =>(
        {
            position: 'absolute',
            top: 0,
            height: "100%",
            fontSize: 26,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2),
        }
    )
);

export const galleryImageConfig: {imgUrl: string}[] = [
    {
        imgUrl: `https://toorwelding.com/gallery-image/1.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/2.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/3.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/4.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/5.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/6.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/7.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/8.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/9.jpeg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/10.jpeg`,
    },

    {
        imgUrl: `https://toorwelding.com/gallery-image/11.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/12.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/13.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/14.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/15.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/16.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/17.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/18.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/19.jpg`,
    },
    {
        imgUrl: `https://toorwelding.com/gallery-image/20.jpg`,
    },
]
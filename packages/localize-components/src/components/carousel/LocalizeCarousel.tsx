import React from 'react';

import classnames from 'classnames';
import { debounce } from 'lodash';
import styled from '@emotion/styled';

import { getClientWindowSize } from '@seolhun/localize-components-event-utils';
import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Carousel';
const PAGINATION = {
  PREV: 'prev',
  NEXT: 'next',
};
const DEFAULT_RATIO = 0.5;

interface LocalizeCarouselProps
  extends LocalizeBaseStyledProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set this to change LocalizeCarousel render items
   */
  items: any[];

  /**
   * Set this to change LocalizeCarousel item render function
   */
  children: (item: any, index: number) => any;

  /**
   * Set this to change LocalizeCarousel displayed image count
   */
  displayedImageCount?: number;

  /**
   * Set this to change LocalizeCarousel image padding
   */
  imageGap?: number;

  /**
   * Set this to change LocalizeCarousel z-index
   */
  zIndex?: number;
}

const CarouselWrapper = styled.div<{ zIndex: number }>(({ zIndex }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    zIndex,
  };
});

const CarouselContainer = styled.div({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
});

const PrevPaginationContainer = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '50%',
});

const NextPaginationContainer = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '50%',
});

const CarouselImageContainer = styled.div({
  position: 'relative',
  display: 'block',
  width: '100%',
  transition: 'transform 0.35s linear',
});

const LocalizeCarousel: React.FC<LocalizeCarouselProps> = ({
  items,
  children,
  className,
  displayedImageCount = 3,
  imageGap = 30,
  zIndex = 100,
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [clientWidth, setClientWidth] = React.useState(0);
  const [pageIndex, setPageInddex] = React.useState(0);

  const handleImageWidth = () => {
    if (wrapperRef.current) {
      const { clientWidth } = getClientWindowSize(wrapperRef.current);

      setClientWidth(clientWidth);
    }
  };

  const debouncedHandleImageWidth = debounce(
    () => {
      handleImageWidth();
    },
    250,
    { leading: true, trailing: true },
  );

  React.useEffect(() => {
    handleImageWidth();
    window.addEventListener('resize', debouncedHandleImageWidth);
    return () => {
      window.removeEventListener('resize', debouncedHandleImageWidth);
    };
  }, []);

  const handlePageIndex = (name: string) => () => {
    let newPageIndex = pageIndex;
    if (name === PAGINATION.PREV) {
      const nextPageIndex = pageIndex - displayedImageCount;
      newPageIndex = nextPageIndex < 0 ? 0 : nextPageIndex;
    } else if (name === PAGINATION.NEXT) {
      const nextPageIndex = pageIndex + displayedImageCount;
      newPageIndex = nextPageIndex > items.length ? pageIndex : nextPageIndex;
    }
    setPageInddex(newPageIndex);
  };

  const getImageMaxWidthByClient = (displayedImageCount: number) => {
    const sliceLength =
      items.length > displayedImageCount
        ? displayedImageCount + DEFAULT_RATIO
        : items.length;
    const imageWidth = clientWidth / sliceLength;
    return imageWidth;
  };

  const memoizedImageWidth = React.useMemo(() => {
    return getImageMaxWidthByClient(displayedImageCount);
  }, [displayedImageCount]);

  return (
    <CarouselWrapper
      className={classnames(DEFAULT_CLASSNAME, className)}
      zIndex={zIndex}
    >
      <CarouselContainer ref={wrapperRef}>
        <PrevPaginationContainer onClick={handlePageIndex(PAGINATION.PREV)} />
        <NextPaginationContainer onClick={handlePageIndex(PAGINATION.NEXT)} />
        {items.map((item, idx) => (
          <CarouselImageContainer
            key={`carousel-image-${idx}`}
            css={{
              flex: `0 0 ${100 / displayedImageCount}%`,
              maxWidth: `${memoizedImageWidth}px`,
              paddingRight: `${imageGap}px`,
              transform: `matrix(1, 0, 0, 1, -${memoizedImageWidth *
                pageIndex}, 0)`,
            }}
          >
            {children(item, idx)}
          </CarouselImageContainer>
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export { LocalizeCarouselProps, LocalizeCarousel };

export default LocalizeCarousel;

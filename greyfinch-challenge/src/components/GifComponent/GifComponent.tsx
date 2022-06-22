import React, { useState } from 'react';
import { useAsync } from "react-async-hook";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from '@giphy/react-components';
import { IGif } from "@giphy/js-types";
import { AnimalsTag } from '../../domain/types';

const giphyFetch = new GiphyFetch("D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa");

interface IGifComponentProps {
  tag: AnimalsTag;
  onClick: (gif: any) => void;
};

const GifComponent = ({ tag, onClick }: IGifComponentProps): JSX.Element => {
  const [gif, setGif] = useState<IGif | null>(null);
  useAsync(async () => {
    const { data } = await giphyFetch.random({tag});
    setGif(data);
  }, []);

  if (!gif) {
    return <></>;
  }
  return (
    <Gif
      style={{ cursor: 'pointer' }}
      gif={gif}
      width={200}
      noLink={true}
      onGifClick={onClick}
    />
  );
};

export default GifComponent;

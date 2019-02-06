import React from 'react';
import styled from 'styled-components';
import { IVideo } from '../types/models';

const Video = styled.video`
  height: 100vh;
  width: 100vw;
`;

interface IPlayerProps {
  video: IVideo;
  subtrack: string;
}

export default function Player(props: IPlayerProps) {
  const { video, subtrack } = props;

  return (
    <div>
      <Video width="640" height="360" key={video.url} controls={true}>
        {subtrack && <track default={true} kind="captions" src={subtrack} />}
        <source src={video.url} type="video/mp4" />
        Video tags not supported
      </Video>
    </div>
  );
}
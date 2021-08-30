import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

const TrackPage = () => {
  const track : ITrack = {
    _id:'1',name:"Трек 1",artist:'Исполнитель 1',text:'Какой-то текст',
    listens:5,audio:"http://localhost:5000/audio/af017143-03a8-4fce-b016-8167c38d5beb.mp3",
    picture:"http://localhost:5000/image/d1ee8843-e5e8-419a-a8cb-75fa2c995381.jpg",comments:[]
  }
  const router = useRouter()

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{fontSize:32}}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container style={{margin:'20px 0'}}>
        <img src={track.picture} alt="" width={200} height={200}/>
        <div>
          <h1>{track.name}</h1>
          <h1>{track.artist}</h1>
          <h1>Прослушиваний : {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth/>
        <TextField label="Комментарий" fullWidth multiline rows={4}/>
        <Button>Отправить</Button>
      </Grid>
      <div>
        {
          track.comments.map(comment =>
            <div>
                <div>Автор - {comment.username}</div>
                <div>Комментарий - {comment.text}</div>
            </div>
          )
        }
      </div>
    </MainLayout>
  );
};

export default TrackPage;

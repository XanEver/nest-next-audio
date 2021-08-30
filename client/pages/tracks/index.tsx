import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks : ITrack[] = [
    {
      _id:'1',name:"Трек 1",artist:'Исполнитель 1',text:'Какой-то текст',
      listens:5,audio:"http://localhost:5000/audio/af017143-03a8-4fce-b016-8167c38d5beb.mp3",
      picture:"http://localhost:5000/image/d1ee8843-e5e8-419a-a8cb-75fa2c995381.jpg",comments:[]
    }
  ]
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{width:"900px"}}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

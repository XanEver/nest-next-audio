import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import StepWrapper from "../../components/StepWrapper";

const Create = () => {

  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if(activeStep !== 2){
      setActiveStep(prev => prev + 1)
    }
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
      <MainLayout>
        <StepWrapper activeStep={activeStep}>
          {activeStep === 0 &&
            <Grid container direction="column" style={{padding:'20px'}}>
              <TextField
                label="Название трека"
              />
              <TextField
                label={"Имя исполнителя"}
              />
              <TextField
                label={""}
              />
            </Grid>
          }
          {activeStep === 1 &&
          <h1>Step 2</h1>
          }
          {activeStep === 2 &&
          <h1>Step 3</h1>
          }
        </StepWrapper>
        <Grid container justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={() => back()}>Назад</Button>
          <Button onClick={() => next()}>Далее</Button>
        </Grid>
      </MainLayout>
  );
};

export default Create;

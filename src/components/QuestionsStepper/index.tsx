import * as React from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { QUESTIONS } from './constant';
import { ColorlibConnector, ColorlibStepIconRoot, QuestionFormSection } from './styles';
import { useState } from 'react';
import AnswerForm from './AnswerForm';
import PriorityForm from './PriorityForm';

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <GroupAddIcon />,
    5: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export default function QuestionsStepper() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [answers, setAnswers] = useState<number[]>([-1, -1, -1, -1, -1]);
    const [priorities, setPriorities] = useState<number[]>([0,0,0,0,0]);
    
    const setAnswer = (index: number, value: number) => {
        const newAnswers = [...answers]; // create a new copy of the array
        newAnswers[index] = value; // update the element at the specified index
        setAnswers(newAnswers); // update the state with the new array
    }

    const setPriority = (index: number, value: number) => {
        const newPriorities = [...priorities]; // create a new copy of the array
        newPriorities[index] = value; // update the element at the specified index
        setPriorities(newPriorities); // update the state with the new array
    }

    const handleNext = () => {
      setActiveStep((prevActiveStep) => {
        return (prevActiveStep === QUESTIONS.length - 1 ) ? prevActiveStep : prevActiveStep + 1
      });
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            return (prevActiveStep === 0 ) ? prevActiveStep : prevActiveStep - 1
          });
        };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {QUESTIONS.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <QuestionFormSection>
        <AnswerForm activeStep={activeStep} setAnswer={setAnswer} value={answers[activeStep]}/>
        <PriorityForm activeStep={activeStep} setAnswer={setPriority} value={priorities[activeStep]}/>
      <Box sx={{ mb: 2, display: "flex",
    justifyContent: "center",
    alignItems: "center" }}>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {'Continue'}
                  </Button>
              </Box>
      </QuestionFormSection>
    </Stack>
  );
}

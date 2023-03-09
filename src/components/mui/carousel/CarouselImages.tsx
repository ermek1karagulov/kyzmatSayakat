import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: `Умра деген эмне?`,
    description: `Умранын создук мааниси зыярат кылуу. Шариятта ихрамга киру менен ыйык Каабаны зыярат кылуу, Сафа жана Марва тоолорунун арасында саай кылуу болуп эсептелет.    `,
  },
  {
    label: `Умранын аныктамасы жана окуму:`,
    description: `Умра озунун жол жобосуна ылайык белгилу бир убакытка байланбастан, арапа жана анын артынан келген курман айт кундорунун сыртында каалаган учурда ихрам кийип, таваф жана саай милдетин аткаргандан кийин чач алдырып, сакал-мурутту кыскартып, ихрамдан чыгуу менен орундалган ибадат.    `,
  },
  {
    label: "Умранын парздары:",
    description: `Умранын эки парзы бар.

    1. Ихрамга кируу,
    
    2. Таваф кылуу (Каабаны айлануу). Ихрамга кируу шарт ал эми таваф кылуу болсо рукун болуп саналат.
    `,
  },
  {
    label: "Умранын важиптери:",
    description: `1. Саай. (Саай башка мазхабдарда парз)

      2. Чач алдыруу. (Чач алдыруу Ханафий жана Малики мазхабында важип. Шаафи жана Ханбали мазхабында парз) Ханафий жана Малики мазхабында омурундо бир жолу Умрага баруу суннот ал эми Шаафи жана Ханбали мазхабында болсо Умрага баруу парз болуп эсептелет.
      `,
  },
  {
    label: `Умра учун ихрамга киру жерлери:`,
    description: `Сырттан келгендер мийкат жерлеринин чегинде ал эми Меккеликтер болсо харам аймагынан «Хилл» аймагына чыгып умра учун ихрамга кирип ниет кылышат.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 600, width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

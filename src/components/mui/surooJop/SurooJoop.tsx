import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Кандай документтер керек?",
    description: `Сиз тараптан бир гана загран паспорт жетиштүү. Калган документтер компания тарабынан толукталат.`,
  },
  {
    label: "Пакеттердин ичине эмнелер кирет?",
    description: `
    -Семинар,
    -Тажрыйбалуу Умра башчы,
    -Барып келүү билеттери,
    -Умра визасы,
    -4*, 5* жылдыздуу мейманканалар,
    -Тамак-аш,
    -Дарыгер кызматы,
    -Транспорт,
    -Байланыш жабдыктары,
    -Белектер.
      `,
  },
  {
    label: "Кайсыл убакыттарда барса болот?",
    description: `Ажылык айларынан башка бардык айларда барса болот. (Ай сайын 2 ден группа бар.)`,
  },
  {
    label: "Сиздердин башка компаниялардан өзгөчөлүгүңүздөр кандай?",
    description: `Сапарга чыгуудан мурун Умрачыларыбызга семинарлар уюштурабыз
    Тажрыйбалуу жана билимдүү ажы башчылар коштоп барат
    Сапар учурунда 4 жолу акысыз Умра жасоо мүмкүнчүлүгү бар
    Радио гид кызматы (300 м чейин тартуучу рациялар) активдештирилген
    Умра ибадаттарын биргеликте (жамаат менен) аткарабыз
    Саудияда 50дөн ашуун кызматкерлерибиз бар. Алар мейманканаларда 24 саат кызматта болушат.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        marginTop: "3rem",
        marginBottom: "3rem",
        maxWidth: 1600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Бутуруу" : "Кийинкиси"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Артка
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Кадамдар бутту сиз бутурдунуз!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Башынан окуу
          </Button>
        </Paper>
      )}
    </Box>
  );
}

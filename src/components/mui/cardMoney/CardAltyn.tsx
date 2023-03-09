import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://yt3.ggpht.com/a/AATXAJyGB-9HmY1GdjUzCobQgMSbgPCy-Hbw6nU1A0YO=s900-c-k-c0xffffffff-no-rj-mo"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Алтын
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Аль-Харамга чейин жөө аралыктагы 5* жылдыздуу мейманканага жайгашып,
            өзгөчө Умра программасын жасаңыз! Бул Ыйык Сапарга төмөнкү кызматтар
            камтылган. Виза алуу, Комфортабелдүү авиакомпаниялар менен учуу,
            Мадинадагы 4* 5* жылдыздуу мейманканада -3 күн жана Меккедеги 5*
            жылдыздуу мейманканада -11 күн коноктоо, күн сайын эрте менен жана
            кечинде – түрк ашканасынын эң мыкты ашпозчулары даярдаган даамдуу
            тамактардан Швед столунда даам татуу, тажрыйбалуу жетекчилердин
            коштоосу, комфортабелдик автобустар менен шаарлар ортосунда
            каттамдарды жана зыяраттарды жасоо. Бизде гана; бир Умра сапарында
            акысыз, 4 жолу Умра кылуу каралган. Бардык экскурсиялар жана
            ибадаттар жамаат түрүндө радио гид менен аткарылат! Баасы: $1900дөн
            башталат.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

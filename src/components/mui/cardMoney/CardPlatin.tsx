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
          image="https://avatars.mds.yandex.net/i?id=1a6103b60b8a54fc87c900f542125243b7bc9e29-7801542-images-thumbs&n=13"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Платин
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Аль-Харамга чейин жөө аралыкта жайгашкан 5* жылдыздуу мейманканага
            коноктоп, жашооңуздагы эң сонун Умра программасын жасаңыз! Бул Ыйык
            Сапарда төмөнкү кызматтар каралган. Виза алуу, Комфортабелдүү
            авиакомпаниялар менен учуу, Мадинадагы 4* 5* жылдыздуу мейманканада
            -3 күн жана Меккедеги 5* жылдыздуу мейманканада -11 күн коноктоо,
            күн сайын эрте менен жана кечинде – түрк ашканасынын эң мыкты
            ашпозчулары даярдаган даамдуу тамактардан Швед столунда даам татуу,
            тажрыйбалуу жетекчилердин коштоосу, комфортабелдик автобустар менен
            шаарлар ортосунда каттамдарды жана зыяраттарды жасоо. Бир Умра
            сапарында акысыз, 4 жолу Умра жасоо мүмкүнчүлүгү бизде гана
            каралган. Бардык экскурсиялар жана ибадаттар жамаат түрүндө радио
            гид аркылуу жасалат! Баасы: $2300дөн башталат.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

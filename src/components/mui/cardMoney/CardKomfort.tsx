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
          image="https://avatars.mds.yandex.net/i?id=74866e250aa68a0fbb47d615391f7c3a5ad91e2f-9196574-images-thumbs&n=13"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Комфорт
          </Typography>
          <Typography variant="body2" color="text.secondary">
            КОМФОРТ ПАКЕТ менен Умрага баруучулар үчүн өзгөчө программа. Сиз,
            жайгашкан 4* 5* жылдыздуу мейманканаңыздан Аль-Харамга чейин жөө
            бара аласыз жана сизди сапар учурунда төмөнкү шарттар коштойт. Виза
            алуу. Комфортабелдүү авиакомпаниялар менен учуу мүмкүнчүлүгү.
            Мадинадагы 4* 5* жылдыздуу мейманканада 3 күн, Меккедеги 4* 5*
            жылдыздуу мейманканада 11 күн коноктоп, Ыйык жерлерди зыярат кылуу.
            Түрк ашнасынын эң мыкты ашпозчулары тарабынан даярдалган даамдуу
            тамактардан, күн сайын эрте менен жана кечинде Швед столунда
            каалаганча, каалаган тамагыңыздан даам тата аласыз. Ибадатыңыздын
            толук болуусу үчүн тажрыйбалуу жетекчилер коштоп жүрөт. Шаарлар
            ортосундагы каттамдар, негизги жана кошумча зыярат жасалчу жерлер
            комфортабелдик автобустардын коштоосунда жасалат. Бир Умра сапарында
            акысыз, 4 жолу Умра жасоо мүмкүнчүлүгүн жалгыз Кызмат Саякаттан таба
            аласыз. Бардык ибадат жана экскурсиялар жамаат абалында, радио гид
            менен аткарылат! Баасы: $1550дөн башталат.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

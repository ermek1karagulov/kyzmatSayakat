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
          image="https://avatars.mds.yandex.net/i?id=b2d72c4ed1f999e0ebc4e5be1d691155ee858636-8399913-images-thumbs&n=13"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Кумуш
          </Typography>
          <Typography variant="body2" color="text.secondary">
            КҮМҮШ ПАКЕТ менен Умрага баруучулар үчүн өзгөчө программа. Сиз
            жайгашкан 4* 5* жылдыздуу мейманкана, Аль-Харамга чейин жөө аралыкта
            жайгашкан. Ыйык сапардын наркына төмөнкүлөр кирет. Виза алуу.
            Комфортабелдүү авиакомпаниялар менен учуу. Мадинадагы 4* 5*
            жылдыздуу мейманканада 3 күн, Меккедеги 4* 5* жылдыздуу мейманканада
            11 күн коноктоп, Ыйык жерлерди зыярат кылуу. Түрк ашнасынын эң мыкты
            ашпозчулары тарабынан даярдалган даамдуу тамактардан, күн сайын эрте
            менен жана кечинде Швед столунда каалаганча, каалаган тамагыңыздан
            даам татсаңыз болот. Ибадатыңыздын толук болуусу үчүн тажрыйбалуу
            жетекчилер коштоп жүрөт. Шаарлар ортосундагы каттамдар, негизги жана
            кошумча зыярат жасалчу жерлер комфортабелдик автобустардын
            коштоосунда жүрөт. Бизде гана; Бир Умра сапарында акысыз, 4 жолу
            Умра жасоо мүмкүнчүлүгү бар. Бардык ибадат жана экскурсиялар жамаат
            абалында, радио гид менен аткарылат! Баасы: $1650дөн башталат.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

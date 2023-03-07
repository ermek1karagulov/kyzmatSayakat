import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerbg">
      <div className="header-texts">
        <h2 className="year-umra">Умра 2023-2024</h2>
        <span className="arabic">
          الْحُجَّاجُ وَالْعُمَّارُ وَفْدُ اللَّهِ إِنْ دَعَوْهُ أَجَابَهُمْ
          وَإِنِ اسْتَغْفَرُوهُ غَفَرَ لَهُمْ
        </span>
        <p className="text-khadis">
          "Ажылар жана Умрачылар Аллах Тааланын коногу. Эгер Аллах Тааладан бир
          нерсе сурашса, албетте сураган нерсесин берет. Эгер алар Жараткандан
          кечирим сурашса, албетте кечирет." (Сунани Ибни Маажа, Манаасик 11)
        </p>
        <div>
          <button className="btn-tur">Умра тур покеттери</button>
          <button className="btn-news">Жакынкы каттамдар</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

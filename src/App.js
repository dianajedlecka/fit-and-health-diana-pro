@media (max-width: 760px) {
  .app {
    padding: 10px 10px 82px;
    max-width: 100%;
  }

  .hero {
    min-height: 150px;
    padding: 16px;
    border-radius: 18px;
  }

  .eyebrow {
    font-size: 8px;
    letter-spacing: 2px;
  }

  .hero h1 {
    font-size: 29px;
    margin-top: 10px;
  }

  .hero em {
    font-size: 22px;
    margin-bottom: 6px;
  }

  .hero p {
    font-size: 12px;
    max-width: 230px;
    line-height: 1.25;
  }

  .today {
    width: 76px;
    height: 88px;
    border-radius: 14px;
  }

  .today b {
    font-size: 11px;
  }

  .today strong {
    font-size: 32px;
  }

  .today span {
    font-size: 12px;
  }

  .card {
    border-radius: 18px;
    padding: 13px;
    margin-top: 10px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 1.05;
  }

  .addGrid {
    grid-template-columns: 1.35fr 1fr;
    gap: 9px;
  }

  .photoMini {
    grid-column: 1 / 3;
    height: 56px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .photoMini strong {
    font-size: 15px;
  }

  .photoMini small {
    font-size: 10px;
  }

  label span {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .input {
    height: 42px;
    border-radius: 12px;
  }

  select,
  input {
    font-size: 14px;
  }

  .select svg {
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }

  .weight input {
    padding-left: 10px;
  }

  .weight b {
    width: 34px;
    font-size: 13px;
  }

  .actionGrid {
    gap: 8px;
    margin-top: 10px;
  }

  .aiBtn,
  .manualBtn {
    min-height: 42px;
    font-size: 13px;
    border-radius: 12px;
  }

  /* OCENA ZDROWOTNA — MNIEJSZA, BEZ GIGANTYCZNYCH TEKSTÓW */
  .health {
    padding: 12px;
  }

  .health h2 {
    font-size: 19px;
    margin-bottom: 4px;
    line-height: 1.05;
  }

  .health p {
    font-size: 11px;
    line-height: 1.2;
    margin: 0 0 9px;
    color: #6b5d4a;
  }

  .healthGrid {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }

  .healthGrid button {
    min-height: 64px;
    border-radius: 12px;
    font-size: 9.5px;
    padding: 4px 2px;
    gap: 1px;
  }

  .healthGrid button svg {
    width: 31px;
    height: 31px;
  }

  /* 7 DNI — MNIEJSZA CZCIONKA, ŻEBY SIĘ NIE ZLEWAŁO */
  .weekTop h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .days {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  }

  .day {
    min-height: 62px;
    border-radius: 9px;
    padding: 3px 1px;
  }

  .day b {
    font-size: 9px;
    line-height: 1;
  }

  .day span {
    font-size: 9px;
    line-height: 1;
  }

  .day strong {
    font-size: 16px;
    line-height: 1;
    margin-top: 2px;
  }

  .day small {
    font-size: 9px;
    line-height: 1;
  }

  /* CEL DZIENNY — KAFELKA ZOSTAŁO BARDZIEJ DO ŚRODKA */
  .goalTop {
    grid-template-columns: minmax(0, 1fr) 88px;
    gap: 6px;
    padding-right: 40px;
  }

  .goal h2 {
    font-size: 22px;
  }

  .goalInput input {
    width: 72px;
    height: 36px;
    border-radius: 10px;
    font-size: 13px;
    padding-left: 10px;
  }

  .goalInput b {
    font-size: 11px;
  }

  .remaining {
    width: 84px;
    padding: 7px 5px;
    border-radius: 12px;
    transform: translateX(-34px);
  }

  .remaining span {
    font-size: 10px;
  }

  .remaining strong {
    font-size: 22px;
  }

  .remaining b {
    font-size: 16px;
  }

  /* MAKRO W CELU DZIENNYM — CZYTELNE, ALE NIE GIGANTYCZNE */
  .macroCards {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin-top: 10px;
  }

  .macroMini {
    min-height: 76px;
    border-radius: 11px;
    padding: 6px 4px;
    grid-template-columns: 20px 1fr;
    column-gap: 3px;
  }

  .macroMini svg {
    width: 21px;
    height: 21px;
  }

  .macroMini b {
    font-size: 10.5px;
    line-height: 1.05;
    white-space: nowrap;
  }

  .macroMini strong {
    font-size: 17px;
    line-height: 1;
  }

  .macroMini i {
    height: 4px;
    margin-top: 5px;
  }

  /* MAKRO + WYKRESY — NAPRAWIONE ŚRODKOWE ROZJECHANIE */
  .charts {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .chartCard {
    padding: 11px;
  }

  .chartCard h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .macroChart {
    grid-template-columns: 78px 1fr;
    gap: 6px;
    align-items: center;
  }

  .donut {
    width: 74px;
    height: 74px;
  }

  .donut::after {
    width: 46px;
    height: 46px;
  }

  .donut b {
    font-size: 11px;
    margin-top: 9px;
  }

  .donut span {
    font-size: 8px;
    margin-top: -15px;
  }

  .legend p {
    font-size: 10px;
    grid-template-columns: 8px 1fr 22px;
    gap: 4px;
    margin: 4px 0;
  }

  .legend i {
    width: 8px;
    height: 8px;
  }

  .bars {
    gap: 3px;
  }

  .bar div {
    height: 58px;
    margin-bottom: 4px;
  }

  .bar b,
  .bar span {
    font-size: 8.5px;
    line-height: 1.1;
  }

  /* POSIŁKI — ZOSTAWIAMY CZYTELNE, KALORIE BARDZIEJ DO ŚRODKA */
  .meals h2 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .mealRow {
    grid-template-columns: minmax(0, 1fr) 58px 12px;
    gap: 4px;
    padding: 8px 44px 8px 2px;
  }

  .mealRow > div {
    gap: 8px;
  }

  .mealRow svg {
    width: 24px;
    height: 24px;
  }

  .mealRow b {
    font-size: 16px;
    white-space: nowrap;
  }

  .mealRow strong {
    font-size: 15px;
    text-align: right;
    white-space: nowrap;
  }

  .mealRow em {
    font-size: 22px;
  }

  .bottom {
    min-height: 62px;
    border-radius: 18px;
    bottom: 8px;
  }

  .bottom button {
    font-size: 20px;
  }

  .bottom span {
    font-size: 10px;
  }
}

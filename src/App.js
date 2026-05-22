import React, { useMemo, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=90";

const GREEN = "#0b5a3b";
const DARK = "#073f2d";
const BG = "#dfeee0";

const meals = [
  ["Śniadanie", "☀️"],
  ["Drugie śniadanie", "🍞"],
  ["Obiad", "🥗"],
  ["Podwieczorek", "☕"],
  ["Kolacja", "🥬"],
];

const healthTabs = [
  ["Hashimoto", "🍃"],
  ["PCOS", "♀"],
  ["Insulinooporność", "💧"],
  ["Cukrzyca", "💜"],
];

function getDays() {
  const names = ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."];
  const today = new Date();

  return Array.from({ length: 7 }, (_, index) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - index));

    return {
      day: names[d.getDay()],
      date: d.toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
      }),
      active: index === 6,
    };
  });
}

export default function App() {
  const [goal, setGoal] = useState(2000);
  const [selectedMeal, setSelectedMeal] = useState("Śniadanie");
  const [activeHealth, setActiveHealth] = useState("Cukrzyca");
  const days = useMemo(getDays, []);

  return (
    <>
      <main className="app">
        <section className="hero">
          <div className="heroText">
            <div className="eyebrow">FIT & HEALTH TRACKER</div>
            <h1>Fit and Health</h1>
            <div className="signature">by Diana</div>
            <p>
              Analiza posiłków, makro i ocena dla Hashimoto, PCOS oraz
              insulinooporności.
            </p>
          </div>

          <div className="todayBox">
            <span>Dzisiaj</span>
            <strong>0</strong>
            <b>kcal</b>
          </div>
        </section>

        <section className="card addCard">
          <h2>Dodaj posiłek</h2>

          <div className="addGrid">
            <label>
              <span>Posiłek</span>
              <div className="field">
                <b>☀️</b>
                <select
                  value={selectedMeal}
                  onChange={(e) => setSelectedMeal(e.target.value)}
                >
                  {meals.map(([name]) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </div>
            </label>

            <label>
              <span>Waga porcji</span>
              <div className="weightField">
                <input defaultValue="200" />
                <b>g</b>
              </div>
            </label>

            <button className="photoBtn">
              <span>📷</span>
              <div>
                <strong>Add photo</strong>
                <small>lub z galerii</small>
              </div>
            </button>
          </div>

          <div className="actions">
            <button className="aiBtn">✨ Rozpoznaj posiłek AI</button>
            <button className="manualBtn">✎ Policz ręcznie</button>
          </div>
        </section>

        <section className="card healthCard">
          <h2>Ocena zdrowotna posiłku</h2>

          <div className="healthGrid">
            {healthTabs.map(([name, icon]) => (
              <button
                key={name}
                className={activeHealth === name ? "active" : ""}
                onClick={() => setActiveHealth(name)}
              >
                <span>{icon}</span>
                <b>{name}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="card weekCard">
          <h2>7 dni</h2>
          <div className="daysGrid">
            {days.map((d) => (
              <div className={d.active ? "day active" : "day"} key={d.day + d.date}>
                <b>{d.day}</b>
                <span>{d.date}</span>
                <strong>0</strong>
                <small>kcal</small>
              </div>
            ))}
          </div>
        </section>

        <section className="card goalCard">
          <div className="goalTop">
            <div>
              <h2>Cel dzienny</h2>
              <div className="goalInput">
                <input value={goal} onChange={(e) => setGoal(e.target.value)} />
                <span>kcal</span>
              </div>
            </div>

            <div className="remainingBox">
              <span>Zostało</span>
              <strong>{goal}</strong>
              <b>kcal</b>
            </div>
          </div>

          <div className="macroCards">
            <div className="macroMini">
              <span>🥚</span>
              <b>Białko</b>
              <strong>0 g</strong>
              <i />
            </div>

            <div className="macroMini">
              <span>🌾</span>
              <b>Węgle</b>
              <strong>0 g</strong>
              <i />
            </div>

            <div className="macroMini">
              <span>🥑</span>
              <b>Tłuszcze</b>
              <strong>0 g</strong>
              <i />
            </div>

            <div className="macroMini">
              <span>🍃</span>
              <b>Błonnik</b>
              <strong>0 g</strong>
              <i />
            </div>
          </div>
        </section>

        <section className="chartsGrid">
          <div className="card chartCard">
            <h2>Makro</h2>
            <div className="macroChart">
              <div className="donut">
                <b>0 g</b>
                <span>łącznie</span>
              </div>

              <div className="legend">
                <p><i /> <span>Białko</span> <b>0 g</b></p>
                <p><i /> <span>Węgle</span> <b>0 g</b></p>
                <p><i /> <span>Tłuszcze</span> <b>0 g</b></p>
              </div>
            </div>
          </div>

          <div className="card chartCard">
            <h2>7 dni – kcal</h2>
            <div className="bars">
              {days.map((d) => (
                <div className="bar" key={d.day}>
                  <div />
                  <b>{d.day}</b>
                  <span>0</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card mealsCard">
          <h2>Posiłki</h2>

          {meals.map(([name, icon]) => (
            <div className="mealRow" key={name}>
              <div>
                <span>{icon}</span>
                <b>{name}</b>
              </div>
              <strong>0 kcal</strong>
              <em>›</em>
            </div>
          ))}
        </section>

        <nav className="bottomNav">
          <button>⌘<span>Dzisiaj</span></button>
          <button>▤<span>Dziennik</span></button>
          <button>▥<span>Statystyki</span></button>
          <button>⚙<span>Ustawienia</span></button>
        </nav>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        body {
          margin: 0;
          background: ${BG};
          color: ${DARK};
        }

        .app {
          max-width: 920px;
          margin: 0 auto;
          padding: 18px 18px 96px;
        }

        .hero {
          min-height: 250px;
          border-radius: 28px;
          padding: 32px;
          color: white;
          background:
            linear-gradient(90deg, rgba(4, 55, 36, 0.95), rgba(4, 55, 36, 0.45)),
            url(${HERO_IMAGE});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.16);
          overflow: hidden;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 400;
        }

        .hero h1 {
          font-size: 42px;
          margin: 18px 0 0;
          line-height: 1;
          font-weight: 400;
        }

        .signature {
          color: #e6ef79;
          font-size: 26px;
          font-family: cursive;
          margin-bottom: 10px;
          font-weight: 400;
        }

        .hero p {
          font-size: 16px;
          line-height: 1.25;
          font-weight: 400;
          max-width: 470px;
          margin: 0;
        }

        .todayBox {
          width: 130px;
          height: 130px;
          border-radius: 24px;
          background: rgba(0, 68, 45, 0.92);
          display: grid;
          place-items: center;
          align-content: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          flex: 0 0 auto;
        }

        .todayBox span,
        .todayBox b {
          font-size: 15px;
          font-weight: 400;
        }

        .todayBox strong {
          font-size: 32px;
          line-height: 1;
          color: white;
          font-weight: 400;
        }

        .card {
          background: linear-gradient(145deg, #fffaf0, #fff4df);
          border: 1px solid rgba(97, 76, 42, 0.12);
          border-radius: 24px;
          padding: 24px;
          margin-top: 16px;
          box-shadow: 0 12px 35px rgba(65, 50, 20, 0.08);
        }

        h2 {
          margin: 0 0 16px;
          font-size: 24px;
          color: ${GREEN};
          line-height: 1.1;
          font-weight: 400;
        }

        .addGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.95fr 0.95fr;
          gap: 18px;
          align-items: end;
        }

        label span {
          display: block;
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 8px;
        }

        .field,
        .weightField {
          height: 58px;
          border: 1px solid #e2d4ba;
          background: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .field b {
          font-size: 22px;
          margin: 0 12px;
          font-weight: 400;
        }

        select,
        input {
          border: 0;
          background: transparent;
          outline: 0;
          width: 100%;
          font-size: 15px;
          color: #1d1b18;
          font-weight: 400;
        }

        .weightField input {
          padding-left: 18px;
        }

        .weightField b {
          width: 50px;
          height: 100%;
          display: grid;
          place-items: center;
          border-left: 1px solid #e2d4ba;
          font-size: 15px;
          color: ${GREEN};
          font-weight: 400;
        }

        button {
          font-family: inherit;
          cursor: pointer;
          font-weight: 400;
        }

        .photoBtn {
          height: 58px;
          border-radius: 16px;
          border: 1px solid #e2d4ba;
          background: #fff8ec;
          color: ${GREEN};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 14px;
        }

        .photoBtn span {
          font-size: 26px;
        }

        .photoBtn strong {
          display: block;
          font-size: 15px;
          font-weight: 400;
        }

        .photoBtn small {
          display: block;
          font-size: 12px;
          color: #6d604f;
          font-weight: 400;
        }

        .actions {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 14px;
          margin-top: 18px;
        }

        .aiBtn,
        .manualBtn {
          min-height: 50px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 400;
        }

        .aiBtn {
          background: linear-gradient(135deg, #00663f, #0a7b50);
          color: white;
          border: 0;
        }

        .manualBtn {
          background: transparent;
          border: 2px solid ${GREEN};
          color: ${GREEN};
        }

        .healthGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .healthGrid button {
          border: 1px solid #eadbc1;
          background: #fff8ec;
          border-radius: 16px;
          min-height: 95px;
          color: ${GREEN};
          font-weight: 400;
          font-size: 15px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 5px;
        }

        .healthGrid button span {
          font-size: 28px;
        }

        .healthGrid button b {
          font-size: 15px;
          font-weight: 400;
        }

        .healthGrid button.active {
          background: #e9f6e9;
          border-color: #8dbb8f;
        }

        .daysGrid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .day {
          min-height: 78px;
          border-radius: 14px;
          border: 1px solid #eadbc1;
          background: #fff7e8;
          display: grid;
          place-items: center;
          align-content: center;
          color: ${GREEN};
          font-weight: 400;
        }

        .day b,
        .day span,
        .day small {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.05;
        }

        .day strong {
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          margin-top: 3px;
        }

        .day.active {
          border: 2px solid ${GREEN};
        }

        .goalTop {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 105px;
          gap: 14px;
          align-items: start;
          padding-right: 42px;
        }

        .goalInput {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .goalInput input {
          width: 92px;
          height: 42px;
          border-radius: 13px;
          border: 1px solid #e2d4ba;
          background: white;
          padding-left: 14px;
          font-size: 15px;
        }

        .goalInput span {
          font-size: 15px;
          font-weight: 400;
        }

        .remainingBox {
          width: 96px;
          border-radius: 16px;
          background: linear-gradient(135deg, #00663f, #0b5a3b);
          color: white;
          padding: 10px 7px;
          text-align: center;
          justify-self: start;
          transform: translateX(-26px);
        }

        .remainingBox span,
        .remainingBox b {
          display: block;
          font-size: 14px;
          font-weight: 400;
        }

        .remainingBox strong {
          display: block;
          font-size: 18px;
          line-height: 1;
          font-weight: 400;
        }

        .macroCards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 16px;
        }

        .macroMini {
          min-height: 86px;
          border-radius: 16px;
          background: #fff8ec;
          border: 1px solid #eadbc1;
          padding: 10px;
          display: grid;
          grid-template-columns: 28px 1fr;
          column-gap: 6px;
          align-items: center;
        }

        .macroMini span {
          grid-row: 1 / 3;
          font-size: 22px;
        }

        .macroMini b,
        .macroMini strong {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.1;
        }

        .macroMini i {
          grid-column: 1 / 3;
          height: 5px;
          background: #73c56d;
          border-radius: 999px;
          margin-top: 8px;
        }

        .chartsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .macroChart {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 12px;
          align-items: center;
        }

        .donut {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          background: conic-gradient(#7edb87 0 28%, #4ea1ff 28% 60%, #ffd15a 60% 100%);
          display: grid;
          place-items: center;
          position: relative;
        }

        .donut::after {
          content: "";
          position: absolute;
          width: 62px;
          height: 62px;
          background: #fff8ec;
          border-radius: 50%;
        }

        .donut b,
        .donut span {
          position: relative;
          z-index: 2;
          font-weight: 400;
        }

        .donut b {
          font-size: 13px;
          margin-top: 12px;
        }

        .donut span {
          font-size: 10px;
          margin-top: -18px;
        }

        .legend p {
          display: grid;
          grid-template-columns: 10px 1fr 34px;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 400;
          margin: 6px 0;
        }

        .legend p span,
        .legend p b {
          font-size: 15px;
          font-weight: 400;
        }

        .legend i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0aa56b;
        }

        .legend p:nth-child(2) i {
          background: #f08320;
        }

        .legend p:nth-child(3) i {
          background: #ffd15a;
        }

        .bars {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
          align-items: end;
        }

        .bar {
          text-align: center;
          font-weight: 400;
          color: ${GREEN};
        }

        .bar div {
          height: 78px;
          background: #f1e3ca;
          border-radius: 999px;
          margin-bottom: 6px;
        }

        .bar b,
        .bar span {
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.1;
        }

        .mealRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 70px 16px;
          gap: 8px;
          align-items: center;
          padding: 10px 42px 10px 4px;
          border-bottom: 1px solid rgba(110, 80, 40, 0.14);
        }

        .mealRow:last-child {
          border-bottom: 0;
        }

        .mealRow > div {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .mealRow span {
          font-size: 22px;
        }

        .mealRow b,
        .mealRow strong {
          font-size: 15px;
          color: ${GREEN};
          white-space: nowrap;
          font-weight: 400;
        }

        .mealRow strong {
          color: #1f1b15;
          text-align: right;
        }

        .mealRow em {
          font-style: normal;
          font-size: 22px;
          color: #6e6659;
          font-weight: 400;
        }

        .bottomNav {
          position: sticky;
          bottom: 12px;
          z-index: 20;
          margin-top: 18px;
          min-height: 68px;
          border-radius: 22px;
          background: rgba(255, 248, 236, 0.96);
          border: 1px solid rgba(120, 80, 30, 0.12);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
        }

        .bottomNav button {
          border: 0;
          background: transparent;
          color: ${GREEN};
          font-size: 20px;
          font-weight: 400;
        }

        .bottomNav span {
          display: block;
          font-size: 11px;
          margin-top: 3px;
          font-weight: 400;
        }

        @media (max-width: 760px) {
          .app {
            padding: 10px 10px 82px;
            max-width: 100%;
          }

          .hero {
            min-height: 145px;
            padding: 15px;
            border-radius: 18px;
          }

          .eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .hero h1 {
            font-size: 25px;
            margin-top: 9px;
          }

          .signature {
            font-size: 18px;
            margin-bottom: 6px;
          }

          .hero p {
            font-size: 12px;
            max-width: 225px;
            line-height: 1.25;
          }

          .todayBox {
            width: 72px;
            height: 82px;
            border-radius: 14px;
          }

          .todayBox span,
          .todayBox b {
            font-size: 12px;
          }

          .todayBox strong {
            font-size: 18px;
          }

          .card {
            border-radius: 18px;
            padding: 13px;
            margin-top: 10px;
          }

          h2,
          .addCard h2,
          .healthCard h2,
          .weekCard h2,
          .goalCard h2,
          .chartCard h2,
          .mealsCard h2 {
            font-size: 18px !important;
            font-weight: 400 !important;
            line-height: 1.15 !important;
            margin-bottom: 10px !important;
          }

          .addGrid {
            grid-template-columns: 1.35fr 1fr;
            gap: 8px;
          }

          .photoBtn {
            grid-column: 1 / 3;
            height: 48px;
            border-radius: 12px;
          }

          .photoBtn span {
            font-size: 18px;
          }

          label span,
          select,
          input,
          .weightField b,
          .photoBtn strong,
          .photoBtn small,
          .aiBtn,
          .manualBtn,
          .healthGrid button b,
          .day b,
          .day span,
          .day small,
          .day strong,
          .goalInput span,
          .remainingBox span,
          .remainingBox b,
          .macroMini b,
          .macroMini strong,
          .legend p,
          .legend p span,
          .legend p b,
          .bar b,
          .bar span,
          .mealRow b,
          .mealRow strong {
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.15 !important;
          }

          .field,
          .weightField {
            height: 40px;
            border-radius: 12px;
          }

          .field b {
            font-size: 18px;
            margin: 0 6px;
          }

          .weightField input {
            padding-left: 10px;
          }

          .weightField b {
            width: 34px;
          }

          .actions {
            gap: 8px;
            margin-top: 10px;
          }

          .aiBtn,
          .manualBtn {
            min-height: 40px;
            border-radius: 12px;
          }

          .healthGrid {
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
          }

          .healthGrid button {
            min-height: 62px;
            border-radius: 12px;
            padding: 4px 2px;
            gap: 1px;
          }

          .healthGrid button span {
            font-size: 24px;
          }

          .daysGrid {
            grid-template-columns: repeat(7, minmax(0, 1fr));
            gap: 4px;
          }

          .day {
            min-height: 54px;
            border-radius: 9px;
            padding: 3px 1px;
          }

          .goalTop {
            grid-template-columns: minmax(0, 1fr) 82px;
            gap: 6px;
            padding-right: 38px;
          }

          .goalInput input {
            width: 70px;
            height: 34px;
            border-radius: 10px;
            padding-left: 10px;
          }

          .remainingBox {
            width: 78px;
            padding: 7px 5px;
            border-radius: 12px;
            transform: translateX(-32px);
          }

          .remainingBox strong {
            font-size: 16px !important;
          }

          .macroCards {
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin-top: 10px;
          }

          .macroMini {
            min-height: 64px;
            border-radius: 11px;
            padding: 6px 4px;
            grid-template-columns: 18px 1fr;
            column-gap: 3px;
          }

          .macroMini span {
            font-size: 18px;
          }

          .macroMini i {
            height: 4px;
            margin-top: 5px;
          }

          .chartsGrid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .chartCard {
            padding: 11px;
          }

          .macroChart {
            grid-template-columns: 70px 1fr;
            gap: 5px;
            align-items: center;
          }

          .donut {
            width: 66px;
            height: 66px;
          }

          .donut::after {
            width: 40px;
            height: 40px;
          }

          .donut b {
            font-size: 10px !important;
            margin-top: 8px;
          }

          .donut span {
            font-size: 8px !important;
            margin-top: -14px;
          }

          .legend p {
            grid-template-columns: 7px 1fr 22px;
            gap: 3px;
            margin: 4px 0;
          }

          .legend i {
            width: 7px;
            height: 7px;
          }

          .bars {
            gap: 3px;
          }

          .bar div {
            height: 50px;
            margin-bottom: 4px;
          }

          .mealRow {
            grid-template-columns: minmax(0, 1fr) 58px 12px;
            gap: 4px;
            padding: 8px 42px 8px 2px;
          }

          .mealRow > div {
            gap: 8px;
          }

          .mealRow span {
            font-size: 18px;
          }

          .mealRow em {
            font-size: 18px;
          }

          .bottomNav {
            min-height: 60px;
            border-radius: 18px;
            bottom: 8px;
          }

          .bottomNav button {
            font-size: 18px;
          }

          .bottomNav span {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}

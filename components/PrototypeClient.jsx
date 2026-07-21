"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Boxes, ChartNoAxesColumnIncreasing, ChevronRight, Clock3, FlaskConical, Layers3, Play, RotateCw, Sparkles, Target } from "lucide-react";
import { boardSlots, cards, cardTypes, diagnostics, flowSteps, materials, valueMeta } from "../data/game";

const tabs = [
  { id: "overview", label: "게임성 판단", icon: ChartNoAxesColumnIncreasing },
  { id: "kit", label: "제작물 디자인", icon: Boxes },
  { id: "cards", label: "카드 24장", icon: Layers3 },
  { id: "demo", label: "진행 데모", icon: Play },
  { id: "tuning", label: "테스트 튜닝", icon: FlaskConical }
];

const demoCards = [cards[4], cards[7], cards[18], cards[15], cards[12], cards[20]];
const players = ["민수", "지우", "하늘", "준호"];
const valueKeys = Object.keys(valueMeta);

function ValuePills({ values }) {
  return <div className="value-pills">{values.map((key) => <span key={key} className="value-pill" style={{ "--pill": valueMeta[key].color }}>{valueMeta[key].label}</span>)}</div>;
}

function GameCard({ card, compact = false, selected = false }) {
  const type = cardTypes[card.type];
  const allValues = [...new Set([...card.a.values, ...card.b.values])];
  return (
    <motion.article layout className={`game-card ${compact ? "compact" : ""} ${selected ? "selected" : ""}`} style={{ "--type": type.color }} whileHover={{ y: -4 }}>
      <div className="card-topline"><span className="type-badge">{type.symbol} {type.label}</span><span className="card-id">#{String(card.id).padStart(2, "0")}</span></div>
      <h3>{card.keyword}</h3>
      {!compact && <ValuePills values={allValues} />}
      <div className="choice-block"><b>A</b><p>{card.a.text}</p><ValuePills values={card.a.values} /></div>
      <div className="choice-block alt"><b>B</b><p>{card.b.text}</p><ValuePills values={card.b.values} /></div>
    </motion.article>
  );
}

function Overview() {
  return (
    <div className="view-grid overview-grid">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Prototype verdict</span>
          <h1>이 게임은 된다. 다만 첫 테스트의 핵심은 밸런스가 아니라 “이야기가 바로 생기는가”다.</h1>
          <p>현재 구조는 카드 경쟁, 제한 자원, 개인 보드 퍼즐, 비공개 목표가 동시에 작동한다. 학생에게는 자기 인생 고백이 아니라 가상 인물 편집 게임으로 보이게 하는 점이 강점이다.</p>
          <div className="hero-actions"><a href="#demo" onClick={(event) => event.preventDefault()}>진행 데모 보기</a><span>첫 판 권장: 4라운드 그대로, 수정 없이 관찰</span></div>
        </div>
        <div className="table-illustration" aria-label="게임 테이블 목업">
          <div className="felt">
            {demoCards.slice(0, 4).map((card, index) => <GameCard key={card.id} card={card} compact selected={index === 0} />)}
            <div className="time-stack"><Clock3 size={20} /> 시간 토큰 6개</div>
          </div>
        </div>
      </section>
      <section className="panel diagnosis-panel">
        <div className="section-title"><ChartNoAxesColumnIncreasing /><h2>게임성 스코어</h2></div>
        {diagnostics.map((item) => <div className="diagnostic" key={item.title}><div><b>{item.title}</b><p>{item.detail}</p></div><strong>{item.score}</strong><span><i style={{ width: `${item.score}%` }} /></span></div>)}
      </section>
      <section className="panel principle-panel">
        <div className="section-title"><BookOpen /><h2>구조 판단</h2></div>
        <div className="principles">
          <article><b>카드 종류는 기능으로 나누는 게 맞다</b><p>씨앗, 기회, 변수, 사람은 직업/분야가 아니라 이야기의 위치를 만든다. 그래서 같은 카드도 어디에 놓는지에 따라 의미가 달라진다.</p></article>
          <article><b>남은 시간 점수는 관찰 대상이다</b><p>입찰을 아끼기만 하면 재미가 줄어든다. 첫 테스트에서 모두 0~1개만 쓰면 남은 시간 점수를 낮춰야 한다.</p></article>
          <article><b>말솜씨 점수는 넣지 않는 게 좋다</b><p>학생의 발표력을 평가하지 않고, 카드 네 단어가 연결됐는지만 본다. 이 설계가 안전하다.</p></article>
        </div>
      </section>
    </div>
  );
}

function Kit() {
  return (
    <div className="view-grid">
      <section className="asset-showcase">
        <div className="art-panel"><img src="/assets/card-template.svg" alt="A/B 양방향 카드 목업" /><div><h2>카드 한 장의 정보량</h2><p>중앙 키워드, 카드 종류, A/B 선택, 가치 2개만 남긴다. 제작 시 카드 문장이 길어지는 순간 진행 속도가 떨어진다.</p></div></div>
        <div className="art-panel"><img src="/assets/life-board.svg" alt="개인 인생판 목업" /><div><h2>개인 인생판</h2><p>플레이어가 보는 판단 기준은 네 칸뿐이어야 한다. 나머지 점수 계산은 하단에 작게 두고 진행자가 도와준다.</p></div></div>
      </section>
      <section className="panel">
        <div className="section-title"><Boxes /><h2>실물 준비물</h2></div>
        <div className="material-grid">{materials.map((item) => <article key={item.title} className="material-card" style={{ "--mat": item.color }}><div className="material-icon">{item.amount.includes("24") ? "24" : item.amount.includes("6") ? "6" : item.title.slice(0, 1)}</div><div><b>{item.title}</b><strong>{item.amount}</strong><p>{item.note}</p></div></article>)}</div>
      </section>
      <section className="panel print-advice">
        <h2>첫 제작 권장안</h2>
        <div className="advice-grid"><article><b>A4 8장 배치</b><p>카드 한 세트 24장 = A4 3장. 12명 2테이블이면 6장 인쇄.</p></article><article><b>색 없이도 구분</b><p>씨앗 ●, 기회 ▲, 변수 ■, 사람 ◆. 흑백 인쇄 대비 필수.</p></article><article><b>카드 슬리브 사용</b><p>종이가 얇으면 기존 트럼프 카드와 함께 끼우면 바로 테스트 가능.</p></article></div>
      </section>
    </div>
  );
}

function CardsView() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [valueFilter, setValueFilter] = useState("all");
  const filteredCards = useMemo(() => cards.filter((card) => {
    const typeOk = typeFilter === "all" || card.type === typeFilter;
    const valueOk = valueFilter === "all" || [...card.a.values, ...card.b.values].includes(valueFilter);
    return typeOk && valueOk;
  }), [typeFilter, valueFilter]);

  return (
    <section className="panel card-browser">
      <div className="browser-head"><div><div className="section-title"><Layers3 /><h2>인생 카드 24장</h2></div><p>첫 테스트에서는 카드 텍스트를 읽는 속도가 중요하다. 필터로 종류와 가치 분포를 확인할 수 있다.</p></div><strong>{filteredCards.length}장</strong></div>
      <div className="filter-row"><button className={typeFilter === "all" ? "active" : ""} onClick={() => setTypeFilter("all")}>전체 종류</button>{Object.entries(cardTypes).map(([key, type]) => <button key={key} className={typeFilter === key ? "active" : ""} onClick={() => setTypeFilter(key)}>{type.symbol} {type.label}</button>)}</div>
      <div className="filter-row values"><button className={valueFilter === "all" ? "active" : ""} onClick={() => setValueFilter("all")}>전체 가치</button>{Object.entries(valueMeta).map(([key, value]) => <button key={key} className={valueFilter === key ? "active" : ""} style={{ "--value": value.color }} onClick={() => setValueFilter(key)}>{value.label}</button>)}</div>
      <motion.div layout className="deck-grid"><AnimatePresence>{filteredCards.map((card) => <GameCard key={card.id} card={card} />)}</AnimatePresence></motion.div>
    </section>
  );
}

function Demo() {
  const [step, setStep] = useState(0);
  const activeStep = flowSteps[step];
  const nextStep = () => setStep((value) => (value + 1) % flowSteps.length);

  return (
    <div className="demo-layout">
      <aside className="panel demo-side">
        <div className="section-title"><Play /><h2>한 라운드 진행</h2></div>
        <div className="step-list">{flowSteps.map((item, index) => <button key={item.title} className={index === step ? "active" : ""} onClick={() => setStep(index)}><span>{index + 1}</span><div><b>{item.title}</b><p>{item.body}</p></div><ChevronRight size={18} /></button>)}</div>
        <button className="primary-action" onClick={nextStep}>다음 단계</button>
      </aside>
      <section className="demo-table">
        <div className="felt-board">
          <div className="table-label">테이블 중앙</div>
          <div className="market-row">{demoCards.map((card, index) => <motion.div key={card.id} animate={{ y: step === 2 && index === 0 ? 22 : 0, opacity: step > 2 && index > 0 ? 0.35 : 1, scale: step === 2 && index === 0 ? 1.06 : 1 }} transition={{ type: "spring", stiffness: 160, damping: 18 }}><GameCard card={card} compact selected={step >= 2 && index === 0} /></motion.div>)}</div>
          <motion.div className="demo-callout" key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><b>{activeStep.title}</b><p>{activeStep.table}</p></motion.div>
          <div className="player-row">{players.map((player, index) => <div className="player-card" key={player}><b>{player}</b><div className="token-row">{Array.from({ length: 6 - index }).map((_, tokenIndex) => <motion.i key={tokenIndex} className="token" animate={{ y: step === 1 && tokenIndex < Math.max(0, 3 - index) ? -9 : 0 }} />)}</div><div className="mini-board">{boardSlots.map((slot, slotIndex) => <i key={slot.title} className={step >= 4 && index === 0 && slotIndex === 0 ? "filled" : ""} />)}</div></div>)}</div>
        </div>
      </section>
    </div>
  );
}

function Tuning() {
  return (
    <div className="view-grid tuning-grid">
      <section className="panel">
        <div className="section-title"><Target /><h2>첫 테스트에서 볼 것</h2></div>
        <ol className="checklist"><li>시간 토큰을 실제로 고민해서 쓰는가</li><li>원하는 카드를 빼앗기는 긴장감이 있는가</li><li>비공개 방향이 카드 선택에 영향을 주는가</li><li>시기 배치를 고민하는가</li><li>마지막 이야기가 카드만 보고도 나오는가</li><li>학생들이 다음 판을 다시 해보고 싶어 하는가</li></ol>
      </section>
      <section className="panel">
        <div className="section-title"><RotateCw /><h2>문제별 수정 레버</h2></div>
        <div className="lever-list"><article><b>입찰을 거의 안 함</b><p>남은 시간 점수를 삭제하거나 3개당 1점으로 낮춘다.</p></article><article><b>목표 달성이 너무 어려움</b><p>방향 가치 카드당 2점으로 높이고 첫/마지막 보너스를 없앤다.</p></article><article><b>선택 시간이 김</b><p>입찰 전 고민 시간을 20초로 제한한다.</p></article><article><b>이야기가 연결되지 않음</b><p>연결 점수를 1점에서 2점으로 올려 가치 연결을 더 중요하게 만든다.</p></article></div>
      </section>
      <section className="panel value-map">
        <h2>여섯 가치가 만드는 톤</h2>
        <div className="value-map-grid">{Object.entries(valueMeta).map(([key, value]) => <article key={key} style={{ "--value": value.color }}><span>{value.short}</span><b>{value.label}</b><p>{value.note}</p></article>)}</div>
      </section>
    </div>
  );
}

export default function PrototypeClient() {
  const [activeTab, setActiveTab] = useState("overview");
  const ActiveIcon = tabs.find((tab) => tab.id === activeTab)?.icon ?? Sparkles;

  return (
    <main>
      <header className="site-header">
        <div className="brand-lockup"><div className="logo-mark">다</div><div><p>Board Game Prototype</p><h1>다음 장면</h1></div></div>
        <nav className="tab-nav" aria-label="프로토타입 보기 전환">{tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}><Icon size={17} />{tab.label}</button>; })}</nav>
      </header>
      <div className="active-ribbon"><ActiveIcon size={18} /><span>{tabs.find((tab) => tab.id === activeTab)?.label}</span></div>
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24 }}>
          {activeTab === "overview" && <Overview />}
          {activeTab === "kit" && <Kit />}
          {activeTab === "cards" && <CardsView />}
          {activeTab === "demo" && <Demo />}
          {activeTab === "tuning" && <Tuning />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

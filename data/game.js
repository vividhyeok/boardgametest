export const valueMeta = {
  freedom: { label: "자유", short: "자", color: "#416aa9", note: "내 방식, 이동, 선택권" },
  stability: { label: "안정", short: "안", color: "#3f8061", note: "생활 기반, 계획, 지속" },
  growth: { label: "성장", short: "성", color: "#bd7d27", note: "배움, 실력, 도전" },
  relation: { label: "관계", short: "관", color: "#b85757", note: "친구, 가족, 신뢰" },
  contribution: { label: "기여", short: "기", color: "#327f86", note: "도움, 책임, 영향" },
  joy: { label: "즐거움", short: "즐", color: "#7056a2", note: "재미, 몰입, 만족" }
};

export const cardTypes = {
  seed: { label: "씨앗", symbol: "●", color: "#3f8061", slot: "14~18세 발견" },
  chance: { label: "기회", symbol: "▲", color: "#bd7d27", slot: "19~24세 출발" },
  twist: { label: "변수", symbol: "■", color: "#416aa9", slot: "25~39세 흔들림" },
  people: { label: "사람", symbol: "◆", color: "#b85757", slot: "그 이후 다음 장면" }
};

export const boardSlots = [
  { age: "14~18세", title: "발견", question: "무엇을 좋아하거나 잘하게 되었는가?", match: "seed" },
  { age: "19~24세", title: "출발", question: "처음으로 어떤 길을 선택했는가?", match: "chance" },
  { age: "25~39세", title: "흔들림", question: "무엇 때문에 방향이 바뀌었는가?", match: "twist" },
  { age: "그 이후", title: "다음 장면", question: "결국 누구와 무엇을 지키거나 남겼는가?", match: "people" }
];

export const cards = [
  { id: 1, type: "seed", keyword: "운동 감각", a: { text: "더 높은 수준을 목표로 꾸준히 훈련한다.", values: ["growth", "stability"] }, b: { text: "친구들과 오래 즐길 수 있는 방식으로 계속한다.", values: ["relation", "joy"] } },
  { id: 2, type: "seed", keyword: "만들기와 창작", a: { text: "결과물을 공개하고 실제 사람들의 반응을 받아본다.", values: ["growth", "contribution"] }, b: { text: "평가받지 않고 자기 방식의 취미로 간직한다.", values: ["freedom", "joy"] } },
  { id: 3, type: "seed", keyword: "공부와 기술", a: { text: "익힌 기술로 실제 문제 하나를 해결한다.", values: ["contribution", "stability"] }, b: { text: "여러 분야를 돌아다니며 재미있는 것을 찾는다.", values: ["freedom", "joy"] } },
  { id: 4, type: "seed", keyword: "말하기와 분위기", a: { text: "사람들 앞에 나서서 분위기와 방향을 만든다.", values: ["contribution", "growth"] }, b: { text: "가까운 사람들과 편하게 웃을 수 있는 역할을 한다.", values: ["relation", "joy"] } },
  { id: 5, type: "seed", keyword: "게임과 콘텐츠", a: { text: "직접 기획하거나 만들어보기 시작한다.", values: ["growth", "freedom"] }, b: { text: "잘 맞는 사람을 찾아 함께 즐긴다.", values: ["relation", "joy"] } },
  { id: 6, type: "seed", keyword: "예상 밖의 재능", a: { text: "원래 계획을 바꾸고 새로운 재능을 시험한다.", values: ["growth", "freedom"] }, b: { text: "원래 가던 길 안에서 이 재능을 활용한다.", values: ["stability", "contribution"] } },
  { id: 7, type: "people", keyword: "친구의 제안", a: { text: "조건이 부족해도 친구와 함께 시작한다.", values: ["relation", "joy"] }, b: { text: "각자 다른 길을 가되 서로의 선택을 존중한다.", values: ["freedom", "relation"] } },
  { id: 8, type: "people", keyword: "가족의 기대", a: { text: "가족이 안심할 수 있는 길을 먼저 선택한다.", values: ["stability", "relation"] }, b: { text: "시간을 들여 가족을 설득하고 자신의 길을 선택한다.", values: ["freedom", "growth"] } },
  { id: 9, type: "people", keyword: "좋은 멘토", a: { text: "조언을 따라 체계적으로 배우기 시작한다.", values: ["stability", "growth"] }, b: { text: "조언을 재료로 삼아 재미있는 자기 방식을 만든다.", values: ["freedom", "joy"] } },
  { id: 10, type: "people", keyword: "팀의 갈등", a: { text: "사람들의 의견을 조율하고 함께 갈 방법을 만든다.", values: ["relation", "contribution"] }, b: { text: "팀을 떠나 새로운 환경에서 다시 시작한다.", values: ["freedom", "growth"] } },
  { id: 11, type: "people", keyword: "도움 요청", a: { text: "자신의 계획을 미루고 직접 도와준다.", values: ["relation", "contribution"] }, b: { text: "해결 방법을 알려주면서 자기 계획도 지킨다.", values: ["stability", "contribution"] } },
  { id: 12, type: "people", keyword: "강한 경쟁자", a: { text: "정면으로 경쟁하며 자신의 실력을 끌어올린다.", values: ["growth", "stability"] }, b: { text: "경쟁하는 대신 함께할 방법을 제안한다.", values: ["relation", "contribution"] } },
  { id: 13, type: "chance", keyword: "대회와 오디션", a: { text: "준비가 부족해도 지금 참가한다.", values: ["growth", "joy"] }, b: { text: "이번에는 운영이나 지원 역할을 맡는다.", values: ["stability", "contribution"] } },
  { id: 14, type: "chance", keyword: "먼 지역의 기회", a: { text: "익숙한 곳을 떠나 새로운 환경에 도전한다.", values: ["freedom", "growth"] }, b: { text: "현재의 생활과 가까운 사람들을 지킨다.", values: ["stability", "relation"] } },
  { id: 15, type: "chance", keyword: "안정적인 제안", a: { text: "조건과 역할이 분명한 제안을 받아들인다.", values: ["stability", "contribution"] }, b: { text: "불확실하지만 더 재미있어 보이는 길을 선택한다.", values: ["freedom", "joy"] } },
  { id: 16, type: "chance", keyword: "첫 수입", a: { text: "가까운 사람들과 계획을 세워 생활 기반을 만든다.", values: ["stability", "relation"] }, b: { text: "새로운 경험과 배움에 사용한다.", values: ["joy", "growth"] } },
  { id: 17, type: "chance", keyword: "온라인에서 주목받음", a: { text: "더 넓게 공개해 좋은 영향력을 만들려고 한다.", values: ["contribution", "joy"] }, b: { text: "작은 범위에서 필요한 사람에게만 나눈다.", values: ["freedom", "contribution"] } },
  { id: 18, type: "chance", keyword: "리더 제안", a: { text: "책임을 맡고 팀을 이끈다.", values: ["contribution", "relation"] }, b: { text: "리더보다 자신이 좋아하는 역할에 집중한다.", values: ["joy", "stability"] } },
  { id: 19, type: "twist", keyword: "큰 실패", a: { text: "실패 원인을 정리하고 같은 일에 다시 도전한다.", values: ["growth", "stability"] }, b: { text: "완전히 다른 가능성을 찾아 시험한다.", values: ["freedom", "joy"] } },
  { id: 20, type: "twist", keyword: "너무 지침", a: { text: "하던 일을 잠시 멈추고 충분히 쉰다.", values: ["freedom", "joy"] }, b: { text: "사람들의 도움을 받아 속도를 낮추고 계속한다.", values: ["relation", "growth"] } },
  { id: 21, type: "twist", keyword: "계획 취소", a: { text: "즉흥적으로 새로운 기회를 만들어본다.", values: ["freedom", "joy"] }, b: { text: "생활과 가까운 관계부터 다시 정비한다.", values: ["stability", "relation"] } },
  { id: 22, type: "twist", keyword: "친구와 멀어짐", a: { text: "먼저 대화를 시작해 관계를 회복하려 한다.", values: ["relation", "contribution"] }, b: { text: "변화를 받아들이고 새로운 방향으로 움직인다.", values: ["freedom", "growth"] } },
  { id: 23, type: "twist", keyword: "책임이 늘어남", a: { text: "자신이 맡은 약속을 끝까지 지킨다.", values: ["stability", "contribution"] }, b: { text: "일부를 내려놓고 다시 즐길 수 있는 길을 찾는다.", values: ["freedom", "joy"] } },
  { id: 24, type: "twist", keyword: "마음이 바뀜", a: { text: "주변 사람들과 의논해 방향을 새로 정한다.", values: ["relation", "growth"] }, b: { text: "지금까지의 길에서 책임과 의미를 다시 찾는다.", values: ["stability", "contribution"] } }
];

export const materials = [
  { title: "인생 카드", amount: "24장 × 세트", note: "A/B 양방향 카드. 한 장에서 선택과 가치가 모두 보임", icon: "cards", color: "#416aa9" },
  { title: "삶의 방향", amount: "6장", note: "비공개 목표. 자유, 안정, 성장, 관계, 기여, 즐거움", icon: "target", color: "#7056a2" },
  { title: "개인 인생판", amount: "플레이어당 1장", note: "네 장면, 편집권, 점수 계산을 한 장에 통합", icon: "board", color: "#3f8061" },
  { title: "시간 토큰", amount: "플레이어당 6개", note: "콩, 동전, 단추 등 작은 물건으로 대체 가능", icon: "token", color: "#bd7d27" },
  { title: "시작 표시물", amount: "테이블당 1개", note: "동점 처리 기준. 매 라운드 왼쪽 이동", icon: "start", color: "#b85757" },
  { title: "진행자 기록지", amount: "테이블당 1장", note: "점수 계산과 첫 테스트 관찰 항목 기록", icon: "sheet", color: "#327f86" }
];

export const diagnostics = [
  { title: "게임으로 성립", score: 88, detail: "입찰, 드래프트, 배치, 비밀 목표가 서로 다른 선택 압력을 만든다." },
  { title: "입찰 긴장감", score: 78, detail: "원하는 카드를 선점하려면 시간을 쓰게 된다. 남은 시간 점수는 첫 테스트에서 조정 후보." },
  { title: "이해 난이도", score: 74, detail: "첫 설명 3분은 가능하지만 점수 계산은 진행자 보조가 필요하다." },
  { title: "이야기 생성력", score: 86, detail: "카드 키워드 4개만 이어도 가상 인물의 인생이 자연스럽게 생긴다." }
];

export const flowSteps = [
  { title: "카드 공개", body: "플레이어 수만큼 인생 카드를 중앙에 펼친다.", table: "카드 6장이 모두에게 공개된다." },
  { title: "시간 입찰", body: "각자 시간 토큰 0~3개를 손에 숨긴 뒤 동시에 공개한다.", table: "토큰을 많이 낸 사람이 먼저 고른다." },
  { title: "카드 선택", body: "입찰 순서대로 원하는 카드 한 장을 가져간다.", table: "좋은 카드는 먼저 사라진다." },
  { title: "A/B 결정", body: "카드의 두 선택 중 하나를 고르고, 선택한 쪽이 위로 오게 돌린다.", table: "선택한 가치는 점수와 이야기의 방향이 된다." },
  { title: "시기 배치", body: "자신의 인생판에서 빈 시기 한 곳에 배치한다.", table: "맞는 종류에 놓으면 시기 점수 1점을 기대한다." },
  { title: "한 문장", body: "카드 키워드와 선택을 포함해 이 인물에게 생긴 일을 한 문장으로 말한다.", table: "말솜씨가 아니라 카드와 선택이 들어갔는지만 본다." }
];

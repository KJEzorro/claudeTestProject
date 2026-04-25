# SmallBiz Manager

소상공인 업무 효율화 서비스 — 매출·재고·지출·고객 통합 관리 웹 애플리케이션

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React 18 + TypeScript + Vite + Tailwind CSS v4 |
| 상태관리 | Zustand |
| Backend | Python 3.12 + FastAPI |
| DB | PostgreSQL (Supabase) |
| 배포 | Vercel (FE) + Railway (BE) |

## 빠른 시작

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend

```bash
cd backend

# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python3 -m venv .venv
source .venv/bin/activate

pip install -r requirements-dev.txt
cp .env.example .env   # DB 정보 입력
uvicorn app.main:app --reload --port 8000
```

API 문서: http://localhost:8000/docs

## 디렉터리 구조

```
project1/
├── frontend/
│   └── src/
│       ├── api/          # Axios 클라이언트
│       ├── components/   # 공통 컴포넌트
│       ├── pages/        # 페이지 컴포넌트
│       ├── stores/       # Zustand 상태
│       ├── types/        # TypeScript 타입
│       └── hooks/        # 커스텀 훅
└── backend/
    └── app/
        ├── api/routes/   # API 라우터
        ├── core/         # DB, 설정
        ├── models/       # SQLAlchemy 모델
        └── services/     # 비즈니스 로직
```

## 트러블슈팅

| 문제 | 해결 |
|------|------|
| `npm install` peer dep 오류 | `--legacy-peer-deps` 플래그 추가 |
| DB 연결 실패 | `.env`의 `DATABASE_URL` 확인 |
| CORS 오류 | `backend/app/main.py`의 `allow_origins` 확인 |
| 포트 충돌 | frontend는 3000, backend는 8000 사용 |

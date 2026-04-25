from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import extract
from pydantic import BaseModel
from datetime import date
from typing import Optional
from app.core.database import get_db
from app.models.sale import Sale

router = APIRouter(prefix="/sales", tags=["sales"])


class SaleCreate(BaseModel):
    amount: int
    memo: Optional[str] = None
    date: date


class SaleResponse(BaseModel):
    id: int
    amount: int
    memo: Optional[str]
    date: date

    class Config:
        from_attributes = True


@router.get("/", response_model=list[SaleResponse])
def get_sales(year: int = None, month: int = None, db: Session = Depends(get_db)):
    query = db.query(Sale)
    if year:
        query = query.filter(extract("year", Sale.date) == year)
    if month:
        query = query.filter(extract("month", Sale.date) == month)
    return query.order_by(Sale.date.desc()).all()


@router.post("/", response_model=SaleResponse)
def create_sale(sale: SaleCreate, db: Session = Depends(get_db)):
    db_sale = Sale(**sale.model_dump(), user_id=1)
    db.add(db_sale)
    db.commit()
    db.refresh(db_sale)
    return db_sale


@router.delete("/{sale_id}")
def delete_sale(sale_id: int, db: Session = Depends(get_db)):
    sale = db.query(Sale).filter(Sale.id == sale_id).first()
    if not sale:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(sale)
    db.commit()
    return {"ok": True}

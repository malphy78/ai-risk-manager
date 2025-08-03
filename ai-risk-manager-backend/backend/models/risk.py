from pydantic import BaseModel

class FinancialData(BaseModel):
    revenue: float
    expenses: float
    debt: float
    cash_on_hand: float

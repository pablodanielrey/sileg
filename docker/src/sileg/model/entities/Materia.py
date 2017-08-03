from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship
from model_utils import Base

class Materia(Base):

    __tablename__ = 'materia'
    __table_args__ = {'schema':'sileg'}

    nombre = Column(String)

    @classmethod
    def find(cls, session):
        return session.query(cls)
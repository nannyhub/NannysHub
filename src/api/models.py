import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class User(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String(100), unique=False)
    last_name = Column(String(100), unique=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(500), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstname": self.first_name,
            "last name": self.last_name
            # do not serialize the password, its a security breach
        }

    @classmethod
    def lookup(cls, email):
        user = cls.query.filter_by(email=email).one_or_none()
        return user

# class Parents(db.Model):
#     id = Column(Integer, unique=True, primary_key=True)
#     first_name = Column(String(200), nullable=False)
#     last_name = Column(String(200), nullable=False)
#     description= Column(String(180), nullable=False)
#     number_of_children = Column(Integer, nullable=True)
#     # parents = relationship('User', backref='User', lazy=True)
#     # nannys = relationship('Nannys', backref='Nanny', lazy=True)

#     def __repr__(self):
#         return '<Parents %r>' % self.first_name

#     def serialize(self):
#         return {
#             "id": self.id, 
#             "first_name": self.first_name,
#             "last_name": self.last_name
#         }


class Nanny(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String(200), nullable=False)
    last_name = Column(String(200), nullable=False)
    age = Column(Integer,nullable=False)
    skills = Column(String(200), nullable=True)
    experience = Column(String(200), nullable=False)
    location = Column(String(200), nullable=False)
    price = Column(Integer)

    def __repr__(self):
        return '<Nannys %r>' % self.nanny_id

    def serialize(self):
        return {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "skils": self.skills,
            "experience": self.experience,
            "location": self.location,
            "price": self.price
        }

    @classmethod
    def get_all(cls):
        nannys = cls.query.all()
        return nannys


# class Favorites(db.Model):
#     id = Column(Integer, primary_key=True)
    # parents_id = Column(Integer, ForeignKey('Parents.id')) 
    # parents= relationship(Parents)
    # nannys_id = Column(Integer, ForeignKey('Nannys.id'))
    # nannys= relationship("Nannys")


    # def __repr__(self):
    #     return '<Favorites %r>' % self.favorites_id

    # def serialize(self):
    #     return {
    #         "id": self.id, 
    #         "parent_id": self.parents_id,
    #         "nanny_id": self.nannys_id
    #     }

##these last 2 tables and relationships need to be checked with teachers
##fixed
# class Records(db.Model):
#     id = Column(Integer, primary_key=True)
#     date= Column(String, nullable=False)
#     nannys_id= Column(Integer, ForeignKey("nannys.id"))
#     nannys= relationship(Nannys)
#     parents_id= Column(Integer, ForeignKey("parents.id"))
#     parents= relationship(Parents)


#     def __repr__(self):
#         return '<Records %r>' % self.user_id

#     def serialize(self):
#         return {
#             "parents_id": self.parents_id,
#             "nannys_id": self.nannys_id,
#         }



# class Review(db.Model):
#     id = Column(Integer, primary_key=True)
#     score= Column(Integer, nullable=False)
#     nanny_id= Column(Integer, ForeignKey("nannys.id"))
#     nanny= relationship(Nannys)
#     parents_id= Column(Integer, ForeignKey("parents.id"))
#     parents= relationship(Parents)


#     def __repr__(self):
#         return '<Review %r>' % self.user_id

#     def serialize(self):
#         return {
#             "parents_id": self.parents_id,
#             "nannys_id": self.nannys_id,
#         }
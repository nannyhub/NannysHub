import os
import sys
from sqlalchemy import Column, PrimaryKey, ForeignKey, Integer, String, Boolean, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class User(db.Model):
    id = Column(Integer, primary_key=True)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Parent(db.Model):
    # Here we define columns for the table planet.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, unique=True, primary_key=True)
    first_name = Column(String(200), nullable=False)
    last_name = Column(String(200), nullable=False)
    number_of_children = Column(Integer(10), nullable=False)
    parents = relationship('User.id', backref='User', lazy=True)
    nanny = relationship('', backref='', lazy=True)

    def __repr__(self):
        return '<Parent %r>' % self.first_name

    def serialize(self):
        return {
            "id": self.id, 
            "first_name": self.first_name,
            "last_name": self.last_name
        }



class Favorites(db.Model):
    id = Column(Integer, primary_key=True)
    parent_id = Column(Integer, ForeignKey('Parent.id'))
    nanny_id = Column(Integer, ForeignKey('Nanny.id'))

    def __repr__(self):
        return '<Favorites %r>' % self.favorites_id

    def serialize(self):
        return {
            "id": self.id, 
            "parent_id": self.parent_id,
            "nanny_id": self.nanny_id
        }


    class Nanny(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String(200), nullable=False)
    last_name = Column(String(200), nullable=False)
    skills = Column(String(200), nullable=False)
    experience = Column(String(200), nullable=False)
    location = Column(String(200), nullable=False)
    price = Float(Integer), nullable=False)

    def __repr__(self):
        return '<Nanny %r>' % self.nanny_id

    def serialize(self):
        return {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "skils": self.skills,
            "experience": self.experience,
            "location": self.location,
            "price": self.price
        }


##these last 2 tables and relationships need to be checked with teachers
    class Agenda(db.Model):
    id = Column(Integer, primary_key=True)
    Agenda= relationship(nanny_id)
    Agenda= relationship(parent_id)

    def __repr__(self):
        return '<Agenda %r>' % self.user_id

    def serialize(self):
        return {
            "parent_id": user.email,
            "nanny_id": self.nanny_id,
        }



class Review(db.Model):
    id = Column(Integer, primary_key=True)
    Review= relationship(nanny_id)
    Review= relationship(parent_id)

    def __repr__(self):
        return '<Review %r>' % self.user_id

    def serialize(self):
        return {
            "parent_id": user.email,
            "nanny_id": self.nanny_id,
        }
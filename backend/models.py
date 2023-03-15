from exts import db

"""
class Rental_Property:
    id:int primary key
    type_of_rental: string
    address: text
    county: float
    description:text
    price:decimal
    Country: String
    Available: Boolean
    Images:Blob
"""

class Rental_Property(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    type_of_rental=db.Column(db.String(255),nullable=False)
    address=db.Column(db.String(),nullable=False)
    county=db.Column(db.String(),nullable=False)
    description=db.Column(db.Text(),nullable=False)
    price=db.Column(db.String(),nullable=False)
    country = db.Column(db.String(), nullable=False)
    available = db.Column(db.Boolean, default=True)
    #images=db.Column(db.Blob)

    def __repr__(self):
        return f"<Rental_Property {self.type_of_rental}>"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
            db.session.delete(self)
            db.session.commit()

    def update(self,type_of_rental,address,description,county,price,country,available ):
        self.type_of_rental=type_of_rental
        self.address=address
        self.county=county
        self.description=description
        self.price=price
        self.country=country
        self.available=available
        #self.images=images


        db.session.commit()


#user model
"""
class User:
    id:integer
    username:string
    email:string
    password:string
"""

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(25),nullable=False,unique=True)
    email=db.Column(db.String(80),nullable=False)
    password=db.Column(db.Text(),nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"

    
    def save(self):
        db.session.add(self)
        db.session.commit()



#Image upload model
"""
class Image_Upload:
    id:integer
    filename:string
    image:Image
    
"""

class Image_Upload(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    filename=db.Column(db.String(255),nullable=False)
    image=db.Column(db.LargeBinary,nullable=False)
    
    def save(self):
        db.session.add(self)
        db.session.commit()
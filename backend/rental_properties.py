from flask import Flask,jsonify, request
from flask_restx import Resource, Namespace,fields
from flask_jwt_extended import jwt_required
from models import Rental_Property


rental_property_ns = Namespace('rental_property',description="A namespace for Rental properties")

#model (serializer)
Rental_Property_model = rental_property_ns.model(
    "Rental_Property",
    {
        "id":fields.Integer(),
        "type_of_rental":fields.String(),
        "address":fields.String(),
        "county":fields.String(),
        "description":fields.String(),
        "price":fields.String(),
        "country":fields.String(),
        "available":fields.Boolean()
        #"images":fields.Blob()

    }
)





@rental_property_ns.route('/rental_properties')
class RentalPropertyResource(Resource):

    @rental_property_ns.marshal_list_with(Rental_Property_model)
    def get(self):
        """Get all Rental Properties"""

        RentalProperties=Rental_Property.query.all()
        return RentalProperties

    @rental_property_ns.marshal_with(Rental_Property_model)
    @rental_property_ns.expect(Rental_Property_model)
    @jwt_required()
    def post(self):
        """Create a new Rental Property"""

        data = request.get_json()
        new_RentalProperty = Rental_Property(
            id = data.get('id'),
            type_of_rental = data.get('type_of_rental'),
            address = data.get('address'),
            county = data.get('county'),
            description = data.get('description'),
            price = data.get('price'),
            country = data.get('country'),
            available = data.get('available')
        )

        new_RentalProperty.save()
        return new_RentalProperty,201

@rental_property_ns.route('/rental_property/<int:id>')
class ModifyRentalProperty(Resource):

    @rental_property_ns.marshal_with(Rental_Property_model)
    def get(self,id):
        """Get a Rental Property by Id"""
        
        getRentalProperty=Rental_Property.query.get_or_404(id)

        return getRentalProperty
        
    @rental_property_ns.marshal_with(Rental_Property_model)
    @jwt_required()
    def put(self,id):
        """Update a Rental Property by Id"""
        
        updateRentalProperty = Rental_Property.query.get_or_404(id)

        data = request.get_json()
        
        updateRentalProperty.update(
            data.get('type_of_rental'),
            data.get('address'),
            data.get('county'),
            data.get('description'),
            data.get('price'),
            data.get('country'),
            data.get('available')
            #data.get('images')
            )

        return updateRentalProperty

    @rental_property_ns.marshal_with(Rental_Property_model)
    @jwt_required()
    def delete(self,id):
        """Delete a Rental Property by Id"""

        deleteRentalProperty = Rental_Property.query.get_or_404(id)

        deleteRentalProperty.delete()

        return deleteRentalProperty
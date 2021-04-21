from .models import User
from django.core.exceptions import ObjectDoesNotExist


def get_user_info(user_id, user_pw=None):
    try:
        if user_pw is not None:
            return User.objects.get(user_id=user_id, user_pw=user_pw)
        return User.objects.get(user_id=user_id)
    except ObjectDoesNotExist: 
        return None
        # return {'user_id': 'default', 'email': 'example.com', 'name': 'anonymous'}


def insert_user_info(user_id, user_pw, email, name):
    query = User.objects.create(
        user_id=user_id,
        user_pw=user_pw,
        name=name,
        email=email
    )
    query.save()
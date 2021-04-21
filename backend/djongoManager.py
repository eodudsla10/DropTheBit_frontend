from .models import User, CoinName, UserFavorite
from django.core.exceptions import ObjectDoesNotExist


def get_user_info(user_id, user_pw=None):
    try:
        if user_pw is not None:
            return User.objects.get(user_id=user_id, user_pw=user_pw)
        return User.objects.get(user_id=user_id)
    except ObjectDoesNotExist:  #
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


def get_krw_coin_name(coin_name):
    res = CoinName.objects.get(coin_id=coin_name)
    return res['name_kr']


def get_eng_coin_name(coin_name):
    res = CoinName.objects.get(coin_id=coin_name)
    return res['name_en']


def get_standard_market(user_id):
    res = UserFavorite.objects.get(user_id=user_id)
    return res["standard"]


def get_target_market(user_id):
    res = UserFavorite.objects.get(user_id=user_id)
    return res["targets"]


def update_standard_market(user_id, standard_market):
    res = UserFavorite.objects.get(user_id=user_id)
    res["standard"] = standard_market
    res.save()
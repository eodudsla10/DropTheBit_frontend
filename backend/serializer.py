from rest_framework import serializers
from .models import User, Coin, Market


class CoinSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Coin
        fields = 'coin'


class MarketSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Market
        fields = 'market'


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('user_id', 'email', 'name')


class UserDetailSerializer(serializers.HyperlinkedModelSerializer):

    coins = CoinSerializer(many=True)
    markets = MarketSerializer(many=True)

    class Meta:
        model = User
        fields = ('user_id', 'email', 'name', 'star_coin', 'star_market')
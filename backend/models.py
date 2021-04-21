from djongo import models


class Standard(models.Model):
    market = models.CharField(max_length=20)
    market_KRW = models.IntegerField()
    market_USD = models.IntegerField()

    class Meta:
        abstract = True


class Target(models.Model):
    market = models.CharField(max_length=20)
    market_KRW = models.IntegerField()
    market_USD = models.IntegerField()
    diff_KRW = models.IntegerField()
    diff_USD = models.IntegerField()
    diff_percent = models.IntegerField()

    class Meta:
        abstract = True


class Price(models.Model):
    id = models.CharField(max_length=10)
    name_kr = models.CharField(max_length=10)
    name_en = models.CharField(max_length=20)
    standard = models.EmbeddedField(model_container=Standard)
    target = models.ArrayField(model_container=Target)
    objects = models.DjongoManager()


class Coin(models.Model):
    coin = models.CharField(max_length=20)

    class Meta:
        abstract = True


class Market(models.Model):
    market = models.CharField(max_length=20)

    class Meta:
        abstract = True


class User(models.Model):
    user_id = models.CharField(max_length=20, primary_key=True)
    user_pw = models.CharField(max_length=20)
    name = models.CharField(max_length=15)
    email = models.EmailField()
    star_coin = models.ArrayField(model_container=Coin)
    star_market = models.ArrayField(model_container=Market)
    objects = models.DjongoManager()
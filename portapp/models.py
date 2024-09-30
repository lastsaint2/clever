from django.db import models
class Contact(models.Model):

    

    fname=models.CharField( max_length=50)
    lname=models.CharField( max_length=50)
    email=models.EmailField( max_length=254)
    desription=models.TextField( max_length=254)
    
    def __str__(self):
        return f'{self.fname}:{self.lname}'
    

# Create your models here.

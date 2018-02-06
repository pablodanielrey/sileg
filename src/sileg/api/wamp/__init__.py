import os
import psycopg2

def getConnection(readonly=False):
    con = psycopg2.connect(
            host=os.environ['DB_HOST'],
            dbname=os.environ['DB_NAME'],
            user=os.environ['DB_USER'],
            password=os.environ['DB_PASSWORD']
        )
    #if readonly:
        #con.autocomit = True
        #con.readonly = True
    return con

from sileg.api.wamp.Sileg import Sileg

__all__ = [
    'Sileg'
]

import os
import binance

## Crear entorno?

## USAR OS para guardar las api keys en el sistema
## cmd -> set binance_api=your_api_key_here
## cmd -> set binance_secret=your_api_secret_here

api_key = "k9TY6SFwPeamA4ASGjE4THEYTDQOm7Aok59fdrIamHCBxfoFLuEaaILRaYkd63zc"
secret_key = "pgCrqYaeB2GYdFcqdR5wSU6gzIAuvfDiqLlu2dJmGvQtp3zujJNK8hFLPJ9PYVva"

class ActualizacionDiariaExcel():
    
    def __init__(self) -> None:
        #Comprobamos que binance esta bien instalado
        print(binance.__version__)
        
        # init
        #api_key = os.environ.get('binance_api')
        #api_secret = os.environ.get('binance_secret')
                
    def crearConexion():    
    
        client = binance.Client(api_key, secret_key, testnet=True)
        #print(client.get_account())

        prices = client.get_all_tickers()

        assets_price = []
        count = 0
        
        for i in prices:
            
            assets_price.append(i)
            count += 1

        print(assets_price)

  
 
    crearConexion()

ActualizacionDiariaExcel()
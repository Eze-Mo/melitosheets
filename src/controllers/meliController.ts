import * as meli from 'mercadolibre'
import { Response, Request } from 'express'

const redirect_uri:string = 'http://localhost:8000/ml/login'
let LoggedUser:number
let userProducts:string[]

let meliObject = new meli.Meli(2819386920246546, 'DhtRRoAF005PToDbYuaaieLBfNdrff32')

export class MercadolibreController {    
    public async meliAutorize(req: Request, res: Response){
        await meliObject.authorize(req.query.code, redirect_uri, (err:any, authorize:Object):void => {
            if(err) {
                res.status(400).send(err.message)
            }
            meliObject.access_token =  authorize['access_token']
            meliObject.refresh_token = authorize['refresh_token']
            LoggedUser = authorize['user_id']
        })
        await meliObject.get('users/'+ LoggedUser +'/items/search', (err:any, mlObjRes:Object):void => {
            if (err) {
                res.status(400).send(err.message)
            }
            userProducts = mlObjRes['results']
            res.status(200).json(userProducts)
        })
    }
    public async meliGetProductCategories(req: Request, res: Response) {
        await meliObject.get('sites/MLU/'+ req.query.path,(err:any, mlObjRes:Object):void => {
            if (err) {
                res.status(400).send(err.message)
            }
            res.status(200).json(mlObjRes)
        })
    }
    
    public async meliGetUsersByID(req:Request , res: Response){
        const users:number[] =  req.query.users.split(',');
        if(meliObject.access_token === ''){
            res.redirect('https://auth.mercadolibre.com/authorization?response_type=code&client_id=2819386920246546&redirect_uri=http://localhost:8000/ml/login')
        }
        await meliObject.get('users',{ ids: users },(err:any, mlObjRes:Object):void => {
            if (err) {
                res.status(400).send(err.message)
            }
            res.status(200).json(mlObjRes)
        })
    }
    public async meliGetAllUserProducts(req:Request, res:Response){
        if (userProducts != undefined) {
            await meliObject.get('items?ids='+userProducts,(err:any, myProducts:Object):void => {
                if (err) {
                    res.status(400).send(err.message)
                }
                res.status(200).json(myProducts)
            })
        }
    }
}
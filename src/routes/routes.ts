import { Request, Response, Express } from "express"
import { MercadolibreController } from '../controllers/meliController'
import * as path from 'path'


export class Routes {
    public mercadolibreCrontroller: MercadolibreController = new MercadolibreController();
    
    public routes(app:Express) : void {
        let rootDir:string[] = path.dirname(__filename).split(path.sep)
        rootDir.pop()
        rootDir.push('views')
        const viewPath:string =  rootDir.join('/')


        app.route('/')
        .get((req: Request, res: Response) => {
            
            res.status(200).sendFile('index.html',{root: viewPath})
        })

        app.route('/ml/login')
        .get(this.mercadolibreCrontroller.meliAutorize)
       
        app.route('/ml/get/categories')
        .get(this.mercadolibreCrontroller.meliGetProductCategories)

        app.route('/ml/get/users')
        .get(this.mercadolibreCrontroller.meliGetUsersByID)
        
        app.route('/ml/get/my-products')
        .get(this.mercadolibreCrontroller.meliGetAllUserProducts)

    }
}